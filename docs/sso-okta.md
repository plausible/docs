---
title: Configuring Okta
description: "How to configure Okta as a SAML 2.0 identity provider for Plausible SSO. Step-by-step setup guide for the Okta admin console."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Before configuring Okta, you have to [initiate SSO setup in Plausible](sso#initiating-sso-setup-in-plausible).

- Sign in to your Okta Admin console as an Admin
- Go to **Applications**
- Click the blue **Create App Integration** button, pick **SAML 2.0** and click **Next**

  <div class="browser"><img alt="Okta app integration selection" src={useBaseUrl('img/sso-okta-app-integration-select.png')} /></div>

- Put "Plausible" in the App name field, optionally upload a [logo](/img/plausible_logo.png) and click **Next**

  <div class="browser"><img alt="Google Workspace app details" src={useBaseUrl('img/sso-okta-app-name-logo.png')} /></div>

- Put **Single sign-on URL** and **Audience URI** obtained when [Initiating SSO Setup in Plausible](sso#initiating-sso-setup-in-plausible) in respective inputs, leave **Name ID format** as "Unspecified", **Application username** set to "Okta username" and **Update application username on** to "Create and update."

- Scroll down to **Attribute Statements**, click **Add Another** two times and set the following mappings:

  - `first_name`: `user.firstName`
  - `last_name`: `user.lastName`
  - `email`: `user.email`

  The configured attributes should look like below:

  <div class="browser"><img alt="Okta attribute statements" src={useBaseUrl('img/sso-okta-attr-statements.png')} /></div>

- Scroll down and click **Next**
- Click **Finish** in the final setup wizard step

  <div class="browser"><img alt="Okta feedback step" src={useBaseUrl('img/sso-okta-feedback.png')} /></div>

- Go to **Assignments** tab and give People or Groups access to Plausible

  <div class="browser"><img alt="Okta assignments" src={useBaseUrl('img/sso-okta-assignments.png')} /></div>

- Go back to **Sign On** tab and click **More details** under SAML 2.0 settings

  <div class="browser"><img alt="Okta app overview" src={useBaseUrl('img/sso-okta-app-overview.png')} /></div>

- Keep this page open while moving on to [Finishing SAML SSO Setup in Plausible](sso#finishing-saml-sso-setup-in-plausible).
