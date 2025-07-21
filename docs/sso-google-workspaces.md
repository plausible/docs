---
title: Configuring Google Workspaces
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Before configuring Google Workspaces, you have to [initiate SSO setup in Plausible](sso#initiating-sso-setup-in-plausible).

- Sign in to your Google Workspace Admin console as an Admin
- Go to **Apps** > **Web and mobile apps**

  <img alt="Google Workspace apps list" src={useBaseUrl('img/sso-google-apps-list.png')} />

- Click **Add app** > **Add custom SAML app**

  <img alt="Google Workspace apps list add custom SAML app" src={useBaseUrl('img/sso-google-apps-list-add.png')} />

- Put "Plausible" in the App name field, optionally upload a [logo](/img/plausible_logo.png) and click "**Continue**"

  <img alt="Google Workspace app details" src={useBaseUrl('img/sso-google-app-details.png')} />

- Skip the next step by clicking "**Continue**" again

  <img alt="Google Workspace IdP details to skip" src={useBaseUrl('img/sso-google-idp-details-skip.png')} />

- Put **ACS URL** and **Entity ID** obtained when [Initiating SSO Setup in Plausible](sso#initiating-sso-setup-in-plausible) in respective inputs, tick **Signed response** checkbox, leave **Name ID** configuration as is (format should be "Unspecified" and NameID should be "Basic Information > Primary email") and click "**Continue**"

  <img alt="Google Workspace Service Provider details" src={useBaseUrl('img/sso-google-sp-details.png')} />

- Click "**Add mapping**" three times and set the following mappings:

  - Basic Information > First name: `first_name`
  - Basic Information > Last name: `last_name`
  - Basic Information > Primary email: `email`

  The configured attributes should look like below:

  <img alt="Google Workspace attributes mapping" src={useBaseUrl('img/sso-google-mapping.png')} />

- Click "**Finish**"
- Click on "**User access**" card

  <img alt="Google Workspace user access card" src={useBaseUrl('img/sso-google-user-access-card.png')} />

- Either pick "**ON for everyone**" or enable access for select groups and click "**Save**"

  <img alt="Google Workspace user access config" src={useBaseUrl('img/sso-google-user-access.png')} />

- Go to **Security** > **Authentication** > **SSO with SAML applications**

  <img alt="Google Workspace IdP config" src={useBaseUrl('img/sso-google-idp-config.png')} />

- Keep this page open while moving on to [Finishing SAML SSO Setup in Plausible](sso#finishing-saml-sso-setup-in-plausible)

