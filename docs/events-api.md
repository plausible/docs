---
title: Events API reference
---

import {Required, Optional} from '../src/js/api-helpers.tsx';

The Plausible Events API can be used to record pageviews and custom events. This is useful when tracking Android or iOS mobile apps, or for server side tracking.

In most cases we recommend installing Plausible through our provided [script](/docs/plausible-script) or one of the many
integration packages listed [here](/docs/integration-guides). However, if there's no easy way for you to integrate with Plausible, you can still do so by sending events directly to our API.

### Unique visitor tracking

**Important!** Special care should be taken with two key headers which are used for [unique visitor counting](https://plausible.io/data-policy#how-we-count-unique-users-without-cookies):
1. The _User-Agent_ header
2. The _X-Forwarded-For_ header

If these headers are not sent exactly as required, unique visitor counting will not work as intended. Please refer to the [Request headers](#request-headers) section below for more in-depth documentation on each header separately.

## Endpoints
### POST /api/event

Records a pageview or custom event. When using this endpoint, it's crucial to send the HTTP headers correctly, since these are used for [unique user counting](https://plausible.io/data-policy#how-we-count-unique-users-without-cookies).

```bash title="Try it yourself"
curl -i -X POST https://plausible.io/api/event \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 OPR/71.0.3770.284' \
  -H 'X-Forwarded-For: 127.0.0.1' \
  -H 'Content-Type: application/json' \
  --data '{"name":"pageview","url":"http://dummy.site","domain":"dummy.site"}'
```

```json title="Response 202 Accepted"
{}
```

### Request headers

<hr / >

**User-Agent** <Required />

The raw value of User-Agent is used to calculate the *user_id* which identifies a [unique visitor](https://plausible.io/data-policy#how-we-count-unique-users-without-cookies)
in Plausible.

User-Agent is also used to populate the _Devices_ report in your Plausible dashboard. The device data is derived from the open source database [device-detector](https://github.com/matomo-org/device-detector). If your User-Agent is not showing up in your dashboard, it's probably because it is not recognized as one in the _device-detector_ database.

The header is required but bear in mind that browsers and some HTTP libraries automatically add a default User-Agent header to HTTP requests. In case of browsers, we would not recommend overriding the header manually unless you have a specific reason to.

<hr / >

**X-Forwarded-For** <Optional />

Used to explicitly set the IP address of the client. If not set, the remote IP of the sender will automatically be used. Depending on your use-case:
1. If sending the event from your visitors' device, this header does not need to be set
2. If sending the event from a backend server or proxy, make sure to override this header with the correct IP address of the client.

The raw value of the IP address is not stored in our database. The IP address is used to calculate the *user_id* which identifies a [unique visitor](https://plausible.io/data-policy#how-we-count-unique-users-without-cookies) in Plausible. It is also used to fill the Location report with country, region and city data of the visitor.

If the header contains a comma-separated list (as it should if the request is sent through a chain of proxies), then the first valid IP address from the list is used. Both IPv4 and IPv6 addresses are supported. More information about the header format can be found on [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For).

<hr / >

**Content-Type** <Required />

Must be either *application/json* or *text/plain*. In case of *text/plain*, the request body is still interpreted as JSON.

### Request body JSON parameters
<hr / >

**domain** <Required />

Domain name of the site in Plausible

:::note This is the domain name you used when you added your site to your Plausible account
It doesn't need to be an actual domain name, so when adding your mobile app to Plausible, you could insert the mobile app name in the domain name field
:::
<hr / >

**name** <Required />

Name of the event. Can specify `pageview` which is a special type of event in Plausible. All other names will be treated as
custom events.
<hr / >

**url** <Required />

URL of the page where the event was triggered. If the URL contains UTM parameters, they will be extracted and stored. When using the script, this is set to `window.location.href`.

The maximum size of the URL, excluding the domain and the query string, is 2,000 characters. Additionally, URLs using the [data URI scheme](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) are not supported by the API.

:::tip The URL parameter will feel strange in a mobile app but you can manufacture something that looks like a web URL
If you name your mobile app screens like page URLs, Plausible will know how to handle it. So for example, on your login screen you could send something like:

event: pageview
url: app://localhost/login

The pathname (/login) is what will be shown as the page value in the Plausible dashboard
:::
<hr / >

**referrer** <Optional />

Referrer for this event. When using the standard tracker script, this is set to `document.referrer`

Referrer values are processed heavily for better usability. Consider referrer
URLS like `m.facebook.com/some-path` and `facebook.com/some-other-path`. It's intuitive to think of both of these as coming from a single source: Facebook. In the first example the `referrer` value would be split into `visit:source == Facebook` and `visit:referrer == m.facebook.com/some-path`.

Plausible uses the open source [referer-parser](https://github.com/snowplow-referer-parser/referer-parser) database to parse referrers and assign these source categories.

When no match has been found, the value of the `referrer` field will be parsed as an URL. The hostname will be used as the `visit:source` and the full URL as the `visit:referrer`.
So if you send `https://some.domain.com/example-path`, it will be parsed as follows:
`visit:source == some.domain.com`
`visit:referrer == some.domain.com/example-path`
<hr / >

**props** <Optional />

Custom properties for the event. These can be attached to both pageviews and custom events. Learn more about using custom properties [here](/custom-props/introduction).

The value corresponding to the `props` key in the request body is expected to be a JSON object with a maximum of 30 key-value pairs. If you include more than 30 items in the `props` object, the exceeding items will be discarded. For example, if you're using the `text/plain` content type, your request body might look like this:

```
'{"name":"pageview","url":"http://dummy.site","domain":"dummy.site","props":{"author":"John Doe","logged_in":"false"}}'
```
<hr / >

**revenue** <Optional />

Revenue data for this event. This can be attached to goals and custom events to track revenue attribution. To learn more about revenue tracking and how you can set up your dashboard before sending revenue data, please read [this document](ecommerce-revenue-tracking.md).

The value corresponding to the `revenue` key in the request body is expected to be a JSON object with `currency` and `amount`. `currency` is a ISO 4217 string representing the currency code, e.g. `"USD"` or `"EUR"`. `amount` can be either a float or a string, e.g. `1322.22` or `"1322.22"`. In the case of an invalid currency or amount, the event is still recorded and the API returns HTTP 202, but revenue data associated with it is discarded.

For example, to track a purchase of US$ 1.322,22, your request body might look like this:

```json
{"name":"Purchase","url":"http://dummy.site","domain":"dummy.site","revenue":{"currency":"USD","amount":"1322.22"}}
```
<hr / >

### Debugging

By default, the API returns HTTP 202 Accepted. However, if you want to debug a request and see if the `X-Forwarded-For` header is set correctly, you can add the `X-Debug-Request` header to your request. If set to `true`, the API will return an HTTP 200 OK and the IP address which we will use for unique visitor counting.

E.g: Add this header to your request and log the response.

:::tip Want to monitor the status of our API?
You can can use GET https://plausible.io/api/health endpoint to do so
:::
