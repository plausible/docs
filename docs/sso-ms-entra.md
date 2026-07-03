---
title: Configuring Microsoft Entra (Azure)
description: "How to configure Microsoft Entra ID (Azure AD) as a SAML identity provider for Plausible SSO. Step-by-step setup in the Entra admin center."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Before configuring Microsoft Entra, you have to [initiate SSO setup in Plausible](sso#initiating-sso-setup-in-plausible).

- Sign in to your Microsoft Entra admin center as an Admin
- Go to **Enterprise apps**
- Click **New Application**

  <div class="browser"><img alt="MS Entra new application button" src={useBaseUrl('img/sso-entra-apps-empty-add-button.png')} /></div>

- Click **Create your own application**

- Put "Plausible" in the Input name field, pick "Integrate any other application you don't find in the gallery" and click **Create**.

  <div class="browser"><img alt="MS Entra new application name" src={useBaseUrl('img/sso-entra-app-name.png')} /></div>

- (Optional) Go to **Properties**, upload a [logo](/img/plausible_logo.png) and click **Save**

  <div class="browser"><img alt="MS Entra update logo" src={useBaseUrl('img/sso-entra-update-logo.png')} /></div>

- Go to **Single sign-on** and click **SAML**

  <div class="browser"><img alt="MS Entra pick SAML" src={useBaseUrl('img/sso-entra-pick-saml.png')} /></div>

- Click **Edit** next to **Basic SAML Configuration**

- Click **Add identifier** and enter Identifier obtained when [Initiating SSO Setup in Plausible](sso#initiating-sso-setup-in-plausible).

- Click **Add reply URL** and enter Reply URL obtained when [Initiating SSO Setup in Plausible](sso#initiating-sso-setup-in-plausible) and click **Save**.

  <div class="browser"><img alt="MS Entra add Reply URL" src={useBaseUrl('img/sso-entra-add-reply-url.png')} /></div>

- Go to **Single sign-on** and click **Edit** next to **Attributes & Claims**

- Click on **emailaddress** claim, and in the form that appears, change **Name** to `email`, clear **Namespace** input, leave **Source** intact and click **Save**.

  <div class="browser"><img alt="MS Entra email claim click" src={useBaseUrl('img/sso-entra-email-claim-click.png')} /></div>

- Repeat the same change for `givenname`, changing **Name** to `first_name` and for `surname`, changing **Name** to `last_name`. Remember to clear **Namespace** input.

- Go to **Users and groups** to give access to Plausible to relevant users

  <div class="browser"><img alt="MS Entra users groups" src={useBaseUrl('img/sso-entra-users-groups.png')} /></div>

- Go back to **Single sign-on** and keep this page open while moving on to [Finishing SAML SSO Setup in Plausible](sso#finishing-saml-sso-setup-in-plausible).
