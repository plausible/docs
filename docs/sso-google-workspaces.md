---
title: Configuring Google Workspaces
description: "How to configure Google Workspace as a SAML identity provider for Plausible SSO. Step-by-step setup in the Google Admin console."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Before configuring Google Workspaces, you have to [initiate SSO setup in Plausible](sso#initiating-sso-setup-in-plausible).

- Sign in to your Google Workspace Admin console as an Admin
- Go to **Apps** > **Web and mobile apps**
- Click **Add app** > **Add custom SAML app**

  <div class="browser"><img alt="Google Workspace apps list add custom SAML app" src={useBaseUrl('img/sso-google-apps-list-add.png')} /></div>

- Put "Plausible" in the App name field, optionally upload a [logo](/img/plausible_logo.png) and click **Continue**.

  <div class="browser"><img alt="Google Workspace app details" src={useBaseUrl('img/sso-google-app-details.png')} /></div>

- Skip the next step by clicking **Continue** again

- Put **ACS URL** and **Entity ID** obtained when [Initiating SSO Setup in Plausible](sso#initiating-sso-setup-in-plausible) in respective inputs, tick **Signed response** checkbox, leave **Name ID** configuration as is (format should be "Unspecified" and NameID should be "Basic Information > Primary email") and click **Continue**.

  <div class="browser"><img alt="Google Workspace Service Provider details" src={useBaseUrl('img/sso-google-sp-details.png')} /></div>

- Click **Add mapping** three times and set the following mappings:

  - Basic Information > First name: `first_name`
  - Basic Information > Last name: `last_name`
  - Basic Information > Primary email: `email`

  The configured attributes should look like below:

  <div class="browser"><img alt="Google Workspace attributes mapping" src={useBaseUrl('img/sso-google-mapping.png')} /></div>

- Click **Finish**
- Click on **User access** card

  <div class="browser"><img alt="Google Workspace user access card" src={useBaseUrl('img/sso-google-user-access-card.png')} /></div>

- Either pick **ON for everyone** or enable access for select groups and click **Save**

- Go to **Security** > **Authentication** > **SSO with SAML applications**

  <div class="browser"><img alt="Google Workspace IdP config" src={useBaseUrl('img/sso-google-idp-config.png')} /></div>

- Keep this page open while moving on to [Finishing SAML SSO Setup in Plausible](sso#finishing-saml-sso-setup-in-plausible).
