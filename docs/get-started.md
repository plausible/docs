# Get Started

## 1. Create your Plausible Analytics account

To use Plausible Analytics, you need to [register an account](https://plausible.io/register). To explore the product, we offer you a free 30-day trial. There are no restrictions on your usage during the free trial and no credit card is required to sign up.

Fill in your full name and your email address. We'll send you an email to verify your email address. Look for an email with the subject line "Activate your Plausible free trial". Click on the link within that email.

That will take you to the page where you have to set up your account password. You can proceed to the next step once you have set up your password.

## 2. Add your website details

Once you have an account, you can enter the domain name of the website you want to track. Please, remove `https` and `www` from the URL, just keep the `hostname` (yourdomain.com).

For example, if your site is `https://www.yourdomain.com` then the part to enter in the “Domain” field is `yourdomain.com`.

If you would like to track a subdomain such as `blog.yourdomain.com` then please include the subdomain. Plausible Analytics essentially sees different subdomains as different sites.

For example, if your subdomain is `https://blog.yourdomain.com` then the part to enter in the “Domain” field is `blog.yourdomain.com`.

You need to select your reporting timezone too. This sets the day boundary of your reports regardless of where your traffic is coming from.

For instance, if you select “(GMT+01:00) Amsterdam…” then the beginning and the end of each day of your reporting is calculated based on the time in Amsterdam, even if your visitors come from London or New York.

The best practice is to set the timezone that reflects the location of your audience or if the audience is very broad and spread across the world to set the timezone of your location.

## 3. Add Plausible Analytics script to your website

On this step, we will display your Plausible Analytics tracking script code. The code will look something like this:

```html
<script async defer data-domain=”yourdomain.com” src=”https://plausible.io/js/plausible.js”></script>
```

To integrate your website with Plausible Analytics, you need to be able to update the HTML code of the website you want to track. Paste the tracking script code in the Header (`<head>`) section of your site. Place the tracking script between the `<head>….</head>` tags of your website.

After you've added your site details and added the Plausible Analytics script to the HTML of your website, you should see the script installed on your site. You can verify this by viewing the HTML of your website in the browser.

In your favorite web browser such as Firefox, visit your website, right-click anywhere on the page and choose “View Page Source”. Then press `cmd+f` for Mac or `ctrl+f` for Linux and Windows to search and type `plausible`.

If you followed the previous steps correctly, you should see our tracking code in the source code.

## 4. Verify that the integration is working

After you've added the Plausible Analytics script on your website, it's time to verify that the integration is working.

In your Plausible Analytics account, click on your website domain name. You should see a blinking green dot which indicates that we’re listening for incoming page views in real-time.

Once the first page view comes through, you'll be automatically taken to the stats page. This is an indication that the integration is working, congrats!

If you didn't see the green blinking dot, there's nothing to worry about. It just means that someone visited your site already since you installed the Plausible Analytics script.

If you see the dashboard with graphs and numbers, it means everything is working! Plausible Analytics is now tracking your website statistics while preserving the privacy of your visitors.
