# Run through refresh-settings-screenshots.cjs. This changes local fixtures only.
unless Mix.env() in [:dev, :ce_dev], do: raise("Use a development MIX_ENV")
config = Application.fetch_env!(:plausible, Plausible.Repo)
host = if config[:url], do: URI.parse(config[:url]).host, else: config[:hostname]
unless host in ["localhost", "127.0.0.1", "::1"], do: raise("Refusing non-loopback PostgreSQL")
{:ok, _} = Application.ensure_all_started(:ecto_sql)
{:ok, _} = Application.ensure_all_started(:tzdata)
{:ok, _} = Plausible.Repo.start_link()
alias Plausible.{Repo, Site}
{:ok, site} = Repo.transaction(fn ->
  old = Repo.get_by(Site, domain: "dummy.site")
  target = Repo.get_by(Site, domain: "plausible.io")
  case {old, target} do
    {%Site{}, %Site{}} -> raise("Both sites exist. Refusing to merge or overwrite them.")
    {%Site{} = site, nil} ->
      case Plausible.Site.Domain.change(site, "plausible.io") do
        {:ok, updated} -> updated
        {:error, changeset} -> raise("Rename failed: #{inspect(changeset.errors)}")
      end
    {nil, %Site{} = site} -> site
    {nil, nil} -> raise("Neither dummy.site nor plausible.io exists. Seed the local demo first.")
  end
end)
IO.puts("Local demo site #{site.id}: #{site.domain}. Site ID and analytics data preserved.")
