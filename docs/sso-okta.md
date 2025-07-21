---
title: Configuring Okta
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Before configuring Okta, you have to [initiate SSO setup in Plausible](sso#initiating-sso-setup-in-plausible).

- Sign in to your Okta Admin console as an Admin
- Go to **Applications**

  <img alt="Okta applications list" src={useBaseUrl('img/sso-okta-applications-empty.png')} />

- Click **Create App Integration**, pick **SAML 2.0** and click "**Next**"

  <img alt="Okta app integration selection" src={useBaseUrl('img/sso-okta-app-integration-select.png')} />

- Put "Plausible" in the App name field, optionally upload a [logo](/img/plausible_logo.png) and click "**Next**"

  <img alt="Google Workspace app details" src={useBaseUrl('img/sso-okta-app-name-logo.png')} />

- Put **Single sign-on URL** and **Audience URI** obtained when [Initiating SSO Setup in Plausible](sso#initiating-sso-setup-in-plausible) in respective inputs, leave **Name ID format** as "Unspecified", **Application username** set to "Okta username" and **Update application username on** to "Create and update"

  <img alt="Okta service provider configuration details" src={useBaseUrl('img/sso-okta-sp-details.png')} />

- Scroll down to **Attribute Statements**, click "**Add Another**" two times and set the following mappings:

  - `first_name`: `user.firstName`
  - `last_name`: `user.lastName`
  - `email`: `user.email`

  The configured attributes should look like below:

  <img alt="Okta attribute statements" src={useBaseUrl('img/sso-okta-attr-statements.png')} />

- Scroll down and click "**Next**"
- Click "**Finish**" in the final setup wizard step

  <img alt="Okta feedback step" src={useBaseUrl('img/sso-okta-feedback.png')} />

- Go to "**Assignments**" tab and give People or Groups access to Plausible

  <img alt="Okta assignments" src={useBaseUrl('img/sso-okta-assignments.png')} />

- Go back to "**Sign On**" tab and click "**More details**" under SAML 2.0 settings

  <img alt="Okta app overview" src={useBaseUrl('img/sso-okta-app-overview.png')} />

- Keep this page open while moving on to [Finishing SAML SSO Setup in Plausible](sso#finishing-saml-sso-setup-in-plausible)

  <img alt="Okta app overview" src={useBaseUrl('img/sso-okta-app-details.png')} />

