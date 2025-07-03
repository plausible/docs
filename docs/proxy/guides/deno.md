---
title: Proxying Plausible through Deno Deploy
---

:::tip Don't want to manage your own proxy? We can handle it for you
Our managed proxy lets you send analytics through your own domain name as a first-party connection. All you need to do is set up a CNAME record using the instructions we'll send you and update the snippet on your site. We'll take care of everything else. [Contact us for details](https://plausible.io/contact).
:::

## Step 1: Deploy proxy code

Start by getting a [Deno Deploy](https://deno.com/deploy) account if you don't have one already.

There's a few ways to get code deployed on Deno Deploy. We'll cover two in this section:

- Using Deno Deploy's web interface.
- Using Deno's runtime CLI.

In both cases, the <span id="proxy-script" style={{scrollMarginTop: "70px"}}>script</span> that you'll need to deploy will look something like this:

```typescript
const SCRIPT_PATH = "/pap/script.js"
const EVENT_PATH = "/pap/event"

Deno.serve((request, info) => {
  if (request.url.endsWith(SCRIPT_PATH)) {
    return fetch("https://plausible.io/js/plausible.js")
  } else if (request.url.endsWith(EVENT_PATH)) {
    const requestClone = new Request(request)
    requestClone.headers.delete("Cookie")
    requestClone.headers.set("X-Forwarded-For", info.remoteAddr.hostname)
    return fetch("https://plausible.io/api/event", requestClone)
  }
  return new Response(null, { status: 404 })
})
```

Notice that we remove the `Cookie` header as that could contain sensitive information that's best not shared. We also set the value of `X-Forwarded-For` with the user's IP. See the [events API](../../events-api#request-headers) page for more information on header requirements.

Both `SCRIPT_PATH` and `EVENT_PATH` can and should be customised. They should match the paths you'll end up using in the `script` tag you'll add to the site you want analytics on.

### Using Deno Deploy's web interface

Log into Deno Deploy, navigate to the [Projects Overview](https://dash.deno.com/account/projects) page and click on the "New Playground" button:

![Screenshot of Deno Deploy Projects Overview page](/img/proxy-deno-new-playground.png)

This will deploy a new project and present an online text editor with the contents of your project's `main.ts` file. Paste the contents of the [proxy script](#proxy-script) provided above and click on "Save & Deploy":

![Screenshot of Deno Deploy's playground page](/img/proxy-deno-save-and-deploy.png)

### Using Deno's runtime CLI

Assuming you have a local installation of the [Deno runtime](https://docs.deno.com/runtime/manual#install-deno), initialize a new project with the init command:

```shell
deno init proxy-project-folder
```

Inside that folder, create a file named `main.ts` with the contents of the [proxy script](#proxy-script) provided above.

To deploy your proxy script, run the following from the project folder:

```shell
deno deploy
```

## Step 2: Add script tag to site

After successful deployment, your proxy script will be served from a custom `deno.dev` subdomain. You can confirm that it's working by visiting the URL for the Plausible client-side script:

```
https://your-deno-subdomain.deno.dev/pap/script.js
```

If that works, you can go ahead and add the following [script tag](plausible-script.md) to the site you want analytics on:

```html
<script
  defer
  src="https://your-deno-subdomain.deno.dev/pap/script.js"
  data-api="https://your-deno-subdomain.deno.dev/pap/event"
  data-domain="your-domain.com"
></script>
```

Your single proxy will work with multiple sites; you'll just need to update the `data-domain` attribute for each new site.
