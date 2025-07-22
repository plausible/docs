---
title: Invite team members or external guests and assign roles
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Plausible allows you to create a team for your organization, invite team members to view stats and change your site settings, and to manage your Plausible subscription and invoices as well. You can also invite external collaborators as guests and give them access to specific sites only. 

## Working with your team

### Creating a new team

Log in to your Plausible Analytics account and in the top right menu, click on your account name and choose "**Create a Team**". Note that you may not see this option if you're already a member of an existing team or if you haven't added any sites to your account.

<img alt="Create a team" src={useBaseUrl('img/create-new-team.png')} />

* Give the name to your team.
* Invite individual team members. You can invite any email address. It doesn't necessarily need to be an email address from your company. You can invite existing Plausible users or people who don't have a Plausible account. You can also turn any existing guest into a team member. 
* Assign individual team members their roles
* Click on the "Create Team" button to finish the process

<img alt="Create a team button" src={useBaseUrl('img/create-team-button.png')} />

### Inviting team members and assigning roles

<img alt="Invite team member" src={useBaseUrl('img/invite-team-member.png')} />

* In the top right menu, click on your account name, make sure you have chosen the team you'd like to manage and then click on the "**Team Settings**"
* You can invite new team members within the "**General**" option of the "**Team Settings**"
* We will email the invited person to notify them about your invitation. They will need to register for a Plausible account with the email address that was invited (or log in to their existing Plausible account registered with that email address) and accept your invitation. All invitations expire after 48 hours

### Managing team member roles

When managing team members, you can choose between five different roles:

1. "**Owner**" gets access to everything and can manage the team, sites, API keys and the subscription itself. An owner can also delete a team 
2. "**Admin**" can manage team members, sites and API keys
3. "**Editor**" gets access to all your stats dashboards and can change the site settings
4. "**Billing**" can manage your Plausible subscription, payments and invoices 
5. "**Viewer**" can view the stats dashboards of the sites that the team owns 

You can change the role of a team member at any time:

* In the top right menu, click on your account name, make sure you have chosen the team you'd like to manage and then click on the "**Team Settings**"
* You can adjust roles of existing members within the "**General**" option of the "**Team Settings**"
* Click on the current role next to the name of the person you'd like to change the role for
* Choose a new role for the user

That's it. The team member now has a different role.

Note that you need to be an owner or an admin of a team to change team member roles.

<img alt="Change roles, delete team member" src={useBaseUrl('img/change-roles-remove-users.png')} />

### Removing a team member

You can remove a team member from having access to a site at any time:

* In the top right menu, click on your account name, make sure you have chosen the team you'd like to manage and then click on the "**Team Settings**"
* You can delete existing members within the "**General**" option of the "**Team Settings**"
* Click on the current role next to the name of the person you'd like to remove
* Click "**Remove member**" 

That's it. The team member has now been removed from your team.

Note that you need to be an owner or an admin of a team to remove team members. 

### Changing the name of a team

* In the top right menu, click on your account name, make sure you have chosen the team you'd like to manage and then click on the "**Team Settings**"
* You can change the name of a team within the "**General**" option of the "**Team Settings**"
* Enter the new name for the team and click on the "**Change Name**" button

### Leaving a team

* In the top right menu, click on your account name, make sure you have chosen the team you'd like to leave and then click on the "**Team Settings**"
* To remove yourself from a team, go to the "**General**" option of the "**Team Settings**"
* Click on the "**Leave Team**" button. Note that after leaving a team, you won't have access to the dashboards and collected stats of the sites that the team owns

### Deleting a team

* In the top right menu, click on your account name, make sure you have chosen the team you'd like to delete and then click on the "**Team Settings**"
* To delete the team, go to the "**Danger Zone**" option of the "**Team Settings**"
* Click on the "**Delete Team**" button. Note that deleting the team deletes all dashboards and collected stats of the sites that the team owns

Note that you need to be an owner to delete a team. 

<img alt="Delete team" src={useBaseUrl('img/delete-team.png')} />

## Working with external collaborators

You can also invite external collaborators as guests and give them access to specific sites only. This is useful when working with consultants, freelancers and other individuals who don't need access to all your sites. Here's how to invite guests.

<img alt="Invite collabs" src={useBaseUrl('img/invite-collabs.png')} />

### Inviting external collaborators as guests to individual sites

* Go into [the site settings](website-settings.md) of the website you'd like to invite guests to
* Click on the "**People**" section on the left-hand sidebar
* Click on the "**Invite New Guest**" button
* Enter the email address of the person you'd like to invite. If you invite a new person to Plausible, they will need to register for a Plausible account with the exact email address that you invited
* Assign the role for the invited user. You can choose between two different roles:

1. "**Guest Editor**" gets access to the stats dashboard and can manage the site settings
2. "**Guest Viewer**" gets access to the stats dashboard only

* Click on the "**Invite**" button. We will email the invited person to notify them about your invitation. They will need to register for a Plausible account with the email address that was invited (or log in to their existing Plausible account registered with that email address) and accept your invitation. All invitations expire after 48 hours

:::tip Want to share a single dashboard with someone without them needing a Plausible account?
Our [private and secure shared links](shared-links.md) are a great way to share a particular dashboard quickly 
:::

### Adjusting the guest roles

<img alt="Change guest roles or remove guests" src={useBaseUrl('img/change-roles-remove-users.png')} />

You can change the guest role at any time:

* Go into the site settings of the website you'd like to modify the roles for
* Click on the "**People**" section on the left-hand sidebar. That's where you can get an overview of the current guests and their existing roles
* Click on the current role next to the name of the person you'd like to change the role for
* Choose a new role for the user

That's it. The guest now has a different role.

Note that you need to be an owner or an admin of the team that owns the site to change guest roles.

### Removing a guest from an individual site

You can remove a guest from having access to a site at any time:

* Go into the site settings of the website you'd like to remove a guest for
* Click on the "**People**" section on the left-hand sidebar
* Click on the current role next to the name of the person you'd like to remove
* Click "**Remove member**" 

That's it. The guest has now been removed from the specific site.

Note that you need to be an owner or an admin of the team that owns the site to remove a guest.
