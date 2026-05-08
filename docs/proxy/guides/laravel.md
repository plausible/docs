# Proxying Plausible through Laravel

:::tip Don't want to manage your own proxy? We can handle it for you
Our managed proxy lets you send analytics through your own domain name as a first-party connection. All you need to do is set up a CNAME record using the instructions we'll send you and update the snippet on your site. We'll take care of everything else. [Contact us for details](https://plausible.io/contact).
:::

## Step 1: Get your snippet

In the **Site Installation** area of the **General** section in your [site settings](website-settings.md) you can see
the snippet specific for your site. It will look similar to the following:

```html
<script async src="https://plausible.io/js/pa-XXXXX.js"></script>
<script>
  window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init()
</script>
```

Your snippet will have a different script location than the example above. Look for the `https://plausible.io/js/pa-XXXXX.js` part in your snippet - that's the personalized location for your site's script. Mark it down for subsequent steps.

## Step 2: Create the proxy controller

Create a new controller to handle proxying requests to Plausible:

```bash
php artisan make:controller PlausibleProxyController
```

Add the following code to the controller, replacing `https://plausible.io/js/pa-XXXXX.js` with the script location from Step 1.

```php title="app/Http/Controllers/PlausibleProxyController.php"
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class PlausibleProxyController extends Controller
{
    public function script(): Response
    {
        $script = Cache::remember('plausible-script', now()->addHours(24), function () {
            // Replace with your script URL from Step 1
            $response = Http::get('https://plausible.io/js/pa-XXXXX.js');

            return $response->successful() ? $response->body() : '';
        });

        return response($script, 200, [
            'Content-Type' => 'application/javascript',
            'Cache-Control' => 'public, max-age=86400',
        ]);
    }

    public function event(Request $request): Response
    {
        $response = Http::withHeaders([
            'User-Agent' => $request->userAgent(),
            'X-Forwarded-For' => $request->ip(),
            'Content-Type' => 'text/plain',
        ])->withBody($request->getContent(), 'text/plain')
            ->post('https://plausible.io/api/event');

        return response($response->body(), $response->status());
    }
}
```

## Step 3: Register the routes

Add the following routes to your `routes/web.php` file:

```php title="routes/web.php"
use App\Http\Controllers\PlausibleProxyController;

Route::get('/js/script.js', [PlausibleProxyController::class, 'script'])->name('plausible.script');
Route::post('/api/event', [PlausibleProxyController::class, 'event'])->name('plausible.event');
```

:::warning
Use generic path names. Paths like `/analytics`, `/stats` or `/plausible` may get blocked by adblockers.
:::


## Step 4: Exempt the event route from CSRF

:::warning
Laravel's CSRF protection will block POST requests to the event endpoint by default. This step is required for tracking to work.
:::

In your `bootstrap/app.php` file, add the event route to the CSRF exceptions:

```php title="bootstrap/app.php"
->withMiddleware(function (Middleware $middleware) {
    $middleware->validateCsrfTokens(except: [
        'api/event', // Add this line
    ]);
})
```

## Step 5: Update your snippet

Add the script tags to your application's HTML `<head>`, configuring the `src` and `endpoint` to match the named route from Step 3:

```blade title="layout.blade.php"
<script async src="{{ route('plausible.script') }}"></script>
<script>
  window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init({
    endpoint: "/api/event"
  })
</script>
```
