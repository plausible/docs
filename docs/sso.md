---
title: Single Sign-On (SSO)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Enterprise subscribers have an option to configure Single Sign-On (SSO) integration for their team.

SSO gives a way to access Plausible without having to create a separate account and keep track of another set of credentials. This is possible by first logging in to identity provider (IdP) - be it Google, Okta, Microsoft (Entra) or other - and accessing Plausible and other services supporting SSO through it. As long as login at identity provider is valid, it's possible to access Plausible using e-mail matching the identity from the provider.

Our SSO implementation is SAML 2.0 compliant and user accounts are provisioned just in time. It should be compatible with almost every identity provider as SAML 2.0 protocol is widely supported.

:::tip What is SAML?
**Security Assertion Markup Language (SAML)** is an XML-based protocol for secure exchange of information between an authority (Identity Provider or IdP) and a consumer (Service Provider or SP - in this case, us).
:::

## How it Works

Once SSO is configured and prospective user has a valid identity created at identity provider of team's choice, they can log in using a dedicated login form. 

<img alt="SSO Login Form" src={useBaseUrl('img/sso-login-form.png')} />

After inputting the e-mail, they are redirected to identity provider's portal. The provider validates their identity if they haven't authenticated there yet or uses the already validated identity from logged in session. The identity information (e-mail, name) is then securely sent back to Plausible. That's when the user is provisioned in Plausible.

### Provisioning

When somebody logs in, we first look for an existing member of a team with matching e-mail and configured SSO integration. If a match is found, we log them in as that user. If not, we create a new user on the fly and add them as a member in a team with a configured SSO domain matching email's domain. The member's role will have a default team role assigned. The default role is Viewer, but can be changed.

User logging in through identity provider can only belong to a single team. Matching team with identity is done by looking up identity's email domain among configured SSO domains. Every SSO domain must be unique - the same domain cannot be associated with more than one team at once.

### Security

When SSO is configured for the team for the first time, existing team members can still access it using e-mail and password. However, once they log in using identity provider, their account becomes SSO-only and from that point on they can no longer access Plausible using standard credentials. Standard and SSO users can co-exist on the same team as long as "Force SSO" configuration option is disabled.

Once "Force SSO" is enabled, only SSO users are allowed to access the team. If there are still standard users among members, they are locked out of the team until they provision their account through identity provider.

There's an exception made for Owners who keep the ability to log in using e-mail and password even after logging in through identity provider for troubleshooting configuration or malfunctioning identity provider. They, however, are forced to enable 2FA even before "Force SSO" can be enabled for improved security.

With SSO not being enforced right away it's possible to configure and transition existing team to SSO without risking major disruptions.

### Other

- **Changing name and e-mail of your SSO account**: The name and e-mail address can only be updated via identity provider.
- **SSO initiated from IdP**: Identity providers often support starting login directly from their portal. While this is sometimes convenient, we explicitly do not support it for security reasons. Users must always start signing in from Plausible's login form.

## Configuring SSO

Before starting configuration, make sure you have created a team and subscribed it to a plan enabling SSO. 

The configuration process consists of four major stages:

1. [Initiating SSO Setup in Plausible](#initiating-sso-setup-in-plausible)
2. [Configuring SAML SSO in Identity Provider](#configuring-saml-sso-in-identity-provider)
3. [Finishing SAML SSO Setup in Plausible](#finishing-saml-sso-setup-in-plausible)
4. [Enabling SSO Enforcement](#enabling-sso-enforcement)

### Initiating SSO Setup in Plausible

- Go to the "**Configuration**" section of "**Single Sign-On**" under "**Team Settings**"

  <img alt="Starting SSO configuration" src={useBaseUrl('img/sso-start-config.png')} />

- Click "**Start Configuring SSO**" button

  <img alt="SSO configuration parameters for IdP" src={useBaseUrl('img/sso-sp-config-params.png')} />

- Open identity provider's dashboard and follow further instructions

### Configuring SAML SSO in Identity Provider

The configuration procedure varies significantly from provider to provider. We provide instructions for the most commonly used identity providers below.

When setting up SAML SSO for any other identity provider, please keep the following in mind:

- The `NameID` attribute must be a persistent and unique value that **does not change** between user sessions. This value identifies the user. This is the default for most identity provider services. For self-hosted IdP instances, you have to ensure it's configured properly.
- **ACS URL / Single Sign-On URL / Reply URL**: Enter the URL you have obtained in the previous stage. This URL is unique to your workspace and is an entry point for accepting identity information obtained from identity provider. Some identity providers also call it **Consumer URL**
- **Entity ID / Issuer / Identifier**: Enter the ID you have obtained in the previous stage. This is a unique value identifying your team. Some identity providers also call it **Audience** or **SP Entity ID**
- **Attributes**: Some identity providers also expose them under **Attributes & Claims** or **Attributes Statements**. Make sure you have create and properly mapped following attributes in your identity provider:
  - `email`
  - at least one of `first_name` or `last_name`

Step-by-step instructions for commonly used identity providers:

- [Google Workspaces](#configuring-google-workspaces)
- Okta
- Microsoft Entra (Azure)

#### Configuring Google Workspaces

TBD

### Finishing SAML SSO Setup in Plausible

- Go back to "**Configuration**" section of "**Single Sign-On**" under "**Team Settings**" and click "**Start Configuring**"

  <img alt="SSO configuration parameters for IdP" src={useBaseUrl('img/sso-sp-config-params.png')} />

- Fill the form with parameters obtained after configuring identity provider and click "**Save**"

  <img alt="SSO configuration parameters for SP" src={useBaseUrl('img/sso-idp-config-params.png')} />

  :::tip Make sure to not mix up the inputs!
  It's pretty common for "**SSO URL / Sign-on URL / Login URL**" and "**Entity ID / Issuer Identifier**" to contain very similar URLs. It might be easy to mistake one for the other. This can result in weird behaviour when trying to log in via SSO login form, like browser downloading a file instead of redirecting to identity provider's portal.
  :::

- Enter domain name used in e-mail addresses of identities that should be allowed to log in to this team through SSO and click "**Add Domain**"

  <img alt="Adding SSO domain" src={useBaseUrl('img/sso-add-domain.png')} />

- Verify ownership of the domain using one of three methods. After publishing updated page or DNS record, click **Continue**

  <img alt="Verifying SSO domain" src={useBaseUrl('img/sso-verify-domain.png')} />

- Scroll to "**SSO Domains**" and wait until "**Status**" changes to "validated".

  <img alt="Pending SSO domain" src={useBaseUrl('img/sso-domains-table-pending.png')} />

  :::tip Validation taking too long?
  You can click "**Cancel**" at any time and then click "**Verify**", optionally review verification instructions and then kick off verification again by clicking "**Run Verification Now**"
  :::

- Once the verification succeeds, the domain is marked as verified

  <img alt="Verified SSO domain" src={useBaseUrl('img/sso-domains-table-verified.png')} />

From that point on, SSO should be fully functional and it should be possible to log in using an identity email configured at identity provider.

### Enabling SSO Enforcement

While this step is not strictly necessary to use SSO, it's pretty crucial in ensuring only members provisioned through identity provider have access to the team.

SSO enforcement can be enabled from "**SSO Policy**" section of SSO configuration.

  <img alt="SSO policy with force SSO disabled" src={useBaseUrl('img/sso-policy-disabled.png')} />

There are conditions that have to be met before "Force Single Sing-On" can be enabled though.

- At least one SSO domain must be verified
- At least one user must have successfully logged in through identity provider
- All Owners must have 2FA enabled

:::tip What if not all Owners can enable 2FA at the time of setup?
It might happen in a team with multiple Owners that some might be away and not able to enable 2FA right away. One way to resolve this is temporarily changing their role to "**Admin**". Once they are back, they can log in through identity provider, enable 2FA and ask to have their role changed back to "**Owner**".
:::

If any of those conditions are not met, the switch is disabled and the reason is outlined once you hover over it.

  <img alt="SSO policy with force SSO disabled and a tooltip" src={useBaseUrl('img/sso-policy-disabled-tooltip.png')} />

Once all conditions are met and you enable enforcement, logging in through identity provider will be the only way to access the team.

:::tip Owners can still use standard login in case of emergency
Providing this fallback is important to provide a way to resolve issues with misconfigured or malfunctioning identity provider. Please note, however, that Owners must still log in at least once through identity provider in order to access the team with "**Force Single Sign-On**" enabled.
:::
