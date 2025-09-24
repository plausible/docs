---
title: Change or reset your account password
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You can change your Plausible Analytics account password for security reasons or reset it if you forget it. 

## How to change your Plausible account password 

Here's how to change your Plausible account password:

* Log in to your Plausible account and in the top right menu, click on your account name and choose "**Account Settings**" to enter your account settings.
* In the "**Security**" section, find the "**Password**" area.
* Confirm your current password, then enter your new password and click on the "**Change Password** button.
* If you have enabled the two-factor authentication (2FA), you'll also need to verify the password change by inserting the security code provided by your authenticator app.
* Note that after you successfully change your password, we will automatically log out any of your active sessions on your other devices.

<img alt="Change your account password" src={useBaseUrl('img/account-settings-reset-password.png')} />

## How to reset your Plausible account password

Forgot your Plausible account password? Here's how to reset your Plausible account password:

* [Click here to request a password reset](https://plausible.io/password/request-reset).
* Enter the email address you registered on your account and click on the "**Send reset link**" button.
* Look for an email with the subject line "**Plausible password reset**" and click on the link within that email to change your account password.
* Note that after you successfully reset your password, we will automatically log out [any of your active sessions](login-management.md) on your other devices.

<img alt="Reset your account password" src={useBaseUrl('img/reset-password.png')} />

## How to reset Plausible account password in Docker

When you are self-hosting Plausible and have not set up e-mails by some reason you could want
to reset password from CLI.

* Find your main Plausible container by executing `docker ps` (the name should be something like: `plausible-plausible-1`)
* Run `docker exec -it plausible-plausible-1 /app/bin/plausible remote` (command contains example name)
* Run `Plausible.Repo.get_by(Plausible.Auth.User, email: "youremail@example.com") |> Plausible.Auth.User.set_password("yourNewPassword") |> Plausible.Repo.update`
