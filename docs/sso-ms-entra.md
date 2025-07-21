---
title: Configuring Microsoft Entra (Azure)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Before configuring Microsoft Entra, you have to [initiate SSO setup in Plausible](sso#initiating-sso-setup-in-plausible).

- Sign in to your Microsoft Entra admin center as an Admin
- Go to **Enterprise apps**

  <img alt="MS Entra applications list" src={useBaseUrl('img/sso-entra-apps-empty.png')} />

- Click "**New Application**"

  <img alt="MS Entra new application button" src={useBaseUrl('img/sso-entra-apps-empty-add-button.png')} />

- Click "**Create your own application**"

  <img alt="MS Entra new application button" src={useBaseUrl('img/sso-entra-create-own-app.png')} />

- Put "Plausible" in the Input name field, pick "Integrate any other application you don't find in the gallery" and click "**Create**"

  <img alt="MS Entra new application name" src={useBaseUrl('img/sso-entra-app-name.png')} />

- (Optional) Go to **Properties**, upload a [logo](/img/plausible_logo.png) and click "**Save**"

  <img alt="MS Entra update logo" src={useBaseUrl('img/sso-entra-update-logo.png')} />

- Go to **Single sign-on** and click "**SAML**"

  <img alt="MS Entra pick SAML" src={useBaseUrl('img/sso-entra-pick-saml.png')} />

- Click "**Edit**" next to **Basic SAML Configuration**

  <img alt="MS Entra basic SAML config" src={useBaseUrl('img/sso-entra-basic-saml-button.png')} />

- Click "**Add identifier**" and enter Identifier obtained when [Initiating SSO Setup in Plausible](sso#initiating-sso-setup-in-plausible)

  <img alt="MS Entra add Identifier" src={useBaseUrl('img/sso-entra-add-identifier.png')} />

- Click "**Add reply URL**" and enter Reply URL obtained when [Initiating SSO Setup in Plausible](sso#initiating-sso-setup-in-plausible) and click "**Save**"

  <img alt="MS Entra add Reply URL" src={useBaseUrl('img/sso-entra-add-reply-url.png')} />

- Go to **Single sign-on** and click "**Edit**" next to **Attributes & Claims**

  <img alt="MS Entra attributes button" src={useBaseUrl('img/sso-entra-attrs-button.png')} />

- Click on **emailaddress** claim, change **Name** to `email`, clear **Namespace** input, leave **Source** intact and click "**Save**"

  <img alt="MS Entra email claim click" src={useBaseUrl('img/sso-entra-email-claim-click.png')} />

  <img alt="MS Entra email claim edit" src={useBaseUrl('img/sso-entra-email-claim-edit.png')} />

- Repeat the same change for `givenname`, changing **Name** to `first_name` and for `surname`, changing **Name** to `last_name`. Remember to clear **Namespace** input

  <img alt="MS Entra claims edited" src={useBaseUrl('img/sso-entra-claims-edited.png')} />

- Go to **Users and groups** to give access to Plausible to relevant users

  <img alt="MS Entra users groups" src={useBaseUrl('img/sso-entra-users-groups.png')} />

- Go back to "**Single sign-on**" and keep this page open while moving on to [Finishing SAML SSO Setup in Plausible](sso#finishing-saml-sso-setup-in-plausible)

  <img alt="MS Entra app details" src={useBaseUrl('img/sso-entra-app-details.png')} />

