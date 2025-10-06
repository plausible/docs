---
title: Proxying Plausible through Fresh
---

:::tip Don't want to manage your own proxy? We can handle it for you
Our managed proxy lets you send analytics through your own domain name as a first-party connection. All you need to do is set up a CNAME record using the instructions we'll send you and update the snippet on your site. We'll take care of everything else. [Contact us for details](https://plausible.io/contact).
:::

## Step 1: Get your snippet

In the "**Site Installation**" area of the "**General**" section in your [site settings](website-settings.md) you can see
the snippet specific for your site. It will look similar to the following:

```html
<script async src="https://plausible.io/js/pa-XXXXX.js"></script>
<script>
  window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init()
</script>
```

Your snippet will have a different script location than the example above. Look for the `https://plausible.io/js/pa-XXXXX.js` part in your snippet - that's the personalized location for your site's script. Mark it down for subsequent steps.

## Step 2: Add the script proxy

Create a file `routes/js/script.js.ts` in your project.

```ts
import { HandlerContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req: Request, _ctx: HandlerContext) {
    return fetch("https://plausible.io/js/pa-XXXXX.js");
  },
};

```

## Step 3: Add the api/event proxy

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
        <script async src="/js/script.js"></script>
        <script>
          window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
          plausible.init({
            endpoint: "/api/event"
          })
        </script>
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
