# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```bash
npm install
```

### Local Development

```bash
npm run start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

To run alongside [plausible/analytics](https://github.com/plausible/analytics/), also run caddy in a different terminal:

```bash
caddy run --config Caddyfile
```

Docs are served on localhost:8001/docs in that case.

### Build

```bash
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```bash
$ GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
