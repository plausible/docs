---
title: Proxying Plausible through Fresh
---

## Step 1: Add the script proxy

Create a file `routes/js/script.js.ts` in your project.

```ts
import { HandlerContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req: Request, _ctx: HandlerContext) {
    return fetch("https://plausible.io/js/script.js");
  },
};

```

## Step 2: Add the api/event proxy

Create a file `routes/api/event.ts` in your project

```ts
import { HandlerContext } from "$fresh/server.ts";

export const handler = async (
  _req: Request,
  _ctx: HandlerContext
): Promise<Response> => {
  const addr = _ctx.remoteAddr as Deno.NetAddr;

  return await fetch("https://plausible.io/api/event", {
    method: "post",
    headers: {
      "User-Agent": _req.headers.get("User-Agent") ?? "None",
      "X-Forwarded-For": addr.hostname,
      "Content-Type": "application/json",
    },
    body: await _req.text(),
  });
};
```

## Step 3: Add the script tag

> See Plausible's [script tag](plausible-script.md) docs 

Add a script tag to your application's HTML page, passing the values configured above as attributes:

```tsx
/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/src/runtime/head.ts";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Head>
        <title>Fresh + Plausible</title>
        <script
          defer
          src="/js/script.js"
          data-domain="<your-domain>"
        ></script>
      </Head>
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
    </div>
  );
}

```

Deploy these changes to your Fresh site. You can verify the proxy is working by opening your network tab. You should see a request to https://yourdomain.com/js/script.js with status 200 and another one to https://yourdomain.com/api/event with status 202.
