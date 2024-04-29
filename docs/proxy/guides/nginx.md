---
title: Proxying Plausible through Nginx
---

If you're already running Nginx as your main web server or reverse
proxy, you can also configure it to proxy your analytics. Start by adjusting your configuration as shown in the next step.

--------------------------------------------------------------------------
Darren Zou -** This section is meant to be deleted**

This was a real struggle to do
//I HAVE NO CLUE HOW  TO FORMAT THIS, I WILL JUST GIVE WHAT I FOUND, yall can decide what to do. I spent 2 days trying to fix this, and theres ZERO online videos to help.
//Also I'm very new to this, but I have to say, the online resouces to help with this is really non-beginner friendly.


For the wording on this document, I thought that it meant the modifying the /etc/nginx/nginx.conf file, which I did for like 2 hours and NOTHING happened, and it broke my main redirect and broke my live server, turns out I need to hunt down the nginx config file where I redirected my root reverse proxy, aka where I point my '/' path to my port

For me that file is: /etc/nginx/sites-available/default

Because I followed a yt video: https://www.youtube.com/watch?v=yhiuV6cqkNs

And that file is where I put the code below, and then run 
```
sudo service nginx restart
```

and it works, but thats just me... idk about anyone elses setup.

Also I want to add that this tutorial provides zero guidence for beginners, all I wanted to do was to track people using ad block.

----------------------------------------------------------------------


## Step 1: Update your Nginx config

**READ THIS BEFORE COPYING CODE**

**Make sure you are in the correct nginx config file where you had all of your other proxies.**

This might be /etc/nginx/sites-available/default or some other location, go find the tutorial you followed, this will save you literal DAYS and hair pulling. 

```
# Only needed if you cache the plausible script. Speeds things up.
#
# Note: to use the `proxy_cache` setup, you'll need to make sure the `/var/run/nginx-cache`
# directory exists (e.g. creating it in a build step with `mkdir -p /var/run/nginx-cache`)
# and is readable (including all its parent directories) by your nginx worker user.
#
# To make `/var/run/nginx-cache` persist during reboots of your server
# make sure to run `echo "D /var/run/nginx-cache 0755 root root -" > /usr/lib/tmpfiles.d/nginx-cache.conf`  #btw even sudo doesnt allow me to run this command
proxy_cache_path /var/run/nginx-cache/jscache levels=1:2 keys_zone=jscache:100m inactive=30d  use_temp_path=off max_size=100m;

server {

    resolver 9.9.9.9; # Use quad9 DNS resolver. Remove this line if you've already configured a DNS resolver.
    set $plausible_script_url https://plausible.io/js/script.js; # Change this if you use a different variant of the script
    set $plausible_event_url https://plausible.io/api/event;

    location = /js/script.js {
        proxy_pass $plausible_script_url;
        proxy_set_header Host plausible.io;


        # Tiny, negligible performance improvement. Very optional.
        proxy_buffering on;

        # Cache the script for 6 hours, as long as plausible.io returns a valid response
        proxy_cache jscache;
        proxy_cache_valid 200 6h;
        proxy_cache_use_stale updating error timeout invalid_header http_500;

        # Optional. Adds a header to tell if you got a cache hit or miss
        add_header X-Cache $upstream_cache_status;
    }

    #make sure /api/event goes above '/' so it doesnt get overridden
    location = /api/event {  
        proxy_pass $plausible_event_url;
        proxy_set_header Host plausible.io;
        proxy_buffering on;
        proxy_http_version 1.1;

        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host  $host;
    }

    

    <YOUR OTHER PROXIES>
    example:
    location = / {
        ...
    }

}
```

## Step 2: Restart Nginx 

make sure file syntax is correct
```bash
sudo nginx -t
```

if an error message pops up, read it and fix it.

After fixing, you should end with this output:
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

Then reset Nginx.

```bash
sudo systemctl reload nginx

or

sudo service nginx restart
```


## Step 3: Verify reverse proxy connection
Head over to your https://<backendUrl>/api/event
Example:   https://asgokhsaogihasogihsa.com/api/event
    

If you see this screen:
![image](https://github.com/plausible/docs/assets/89553844/200bdfc3-9ec1-4114-82c0-8b70d4918fa3)

Your reverse proxy worked, because plausible.io's logos are being called.

Otherwise, if you get error 500 or 404, please triple check that you did step 1 and 2 correctly. expecially that you put the reverse proxy in the right config file with the rest of your proxies and the reset nginx command was what you used to reset the nginx originally. 

Also make sure your backendUrl isn't broken, changing nginx settings can disconnect your backend url if restarted incorrectly. 

**DO NOT MOVE ON TO STEP 4 if your reverse proxy is not verified**

## Step 4: Adjust your deployed script

With the above config in place, you can change the script tag on your site as follows:

```html
<script defer data-api="/api/event" data-domain="website.com" src="/js/script.js"></script>
```

## Step 4.5: React - Adjust your deployed script 
If you are using React and the **plausible-tracker** library, please remember to update your apiHost to your backendUrl:

```javascript
export const plausible = Plausible({
  domain: <domain>,
  hashMode: true,
  trackLocalhost: false,
  apiHost: https://<backendUrl>,  //example: apiHost: "https://saoifhsaioufhsaio.io"
})
```


