---
title: "Connect your AI assistant to Plausible"
sidebar_label: "AI integration (MCP)"
description: "Connect to Plausible's official read-only MCP server using OAuth, choose your team and ask questions about your stats. Included with every plan."
---

Plausible's official MCP server lets a compatible AI assistant query your analytics. It is included on all plans, at no extra charge.

## Before you connect

You need a Plausible account that is a member of the team whose sites you want to query, and an AI assistant that supports connecting to Plausible's remote MCP server through OAuth. Any team role works: owner, admin, editor, billing or viewer. Guest access to a single site is not enough.

The integration also works during the free trial. Your assistant may have its own subscription or administrator requirements for connections.

Looking for visits that AI assistants send to your website? That is a different feature. See the **AI Assistants** channel in your [Sources report](top-referrers.md#channels).

{/* LAUNCH CHECK: Verify each assistant's setup and a successful stats query end to end before release; provider documentation alone does not confirm compatibility. */}

## Connect to Plausible

1. Open your assistant's settings for adding an MCP server or external connection. The name and location of this setting depend on your assistant.
2. Add the server URL: `https://plausible.io/mcp`.
3. Follow the authorization flow to sign in to Plausible, select the team you want to use and approve access.
4. Return to your assistant and make sure the connection is available in the conversation you want to use.
5. Ask your first question and include a date range.

Your assistant can look up the sites in the team you selected. If the team has several sites, name the one you mean. For example, replace example.com with your site:

> Show the top 10 traffic sources for example.com over the last 30 days, ranked by visitors.

You do not need to create or paste an API key.

### Connect in Claude

Start the setup on the web or in Claude Desktop.

1. Go to **Customize → Connectors**.
2. Click **+**, then **Add custom connector**.
3. Enter the server URL `https://plausible.io/mcp`, then click **Connect**.
4. Sign in to Plausible, select the team you want to use and approve access.

The Free plan allows one custom connector. On Team and Enterprise plans, an owner needs to add the connector first, then members can connect their own accounts. See [Claude's connector guide](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) for current availability and setup options.

### Connect in ChatGPT

1. On the ChatGPT website, go to **Plugins**.
2. Click **+**, then **Add custom MCP server**.
3. Name the connection **Plausible** and enter `https://plausible.io/mcp` as the server URL.
4. Complete the sign-in to Plausible, select your team and approve access.

Availability depends on your ChatGPT plan and workspace permissions. On Business, admins and owners can create and publish custom connections. On Enterprise and Edu, admins can also authorize selected members to create and test connections; only admins and owners can publish them for the workspace. See [OpenAI's connection guide](https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt) for current requirements.

### Connect in Grok

1. Go to [grok.com/connectors](https://grok.com/connectors).
2. Click **New Connector**, then **Custom**.
3. Enter the server URL `https://plausible.io/mcp` and complete the sign-in.

On Grok Business and Enterprise, an admin needs to provision the connector before members can use it. See [Grok's connector guide](https://docs.x.ai/grok/connectors) for details.

### Connect in Cursor

In Cursor, add the following server configuration to `~/.cursor/mcp.json` for access across projects, or to `.cursor/mcp.json` for a single project. If the file already contains servers, add the `plausible` entry to its existing `mcpServers` object:

```json
{
  "mcpServers": {
    "plausible": {
      "url": "https://plausible.io/mcp"
    }
  }
}
```

Sign in to Plausible when Cursor prompts you. See [Cursor's MCP documentation](https://cursor.com/docs/mcp) for configuration options.

## Questions to try

- “Which pages on example.com received the most visitors last month?”
- “Compare organic search traffic over the last two complete months.”
- “Which sources drove the most signup conversions last month?”
- “Summarize last week's traffic and highlight the biggest changes.”

Conversion questions require the relevant [goals](goal-conversions.md) to be configured. Questions about [custom properties](custom-props/introduction.md) and [revenue](ecommerce-revenue-tracking.md) need a plan that includes those features, the same as in your dashboard. Specify the site, date range and metric when you need an exact comparison. AI-generated explanations can make mistakes; check important results against the dashboard using the same dates and filters.

## Request limits

| Plan | Requests per hour |
| --- | --- |
| Starter and Growth | 300 |
| Business | 600 |

This is a shared, team-wide budget for API requests and MCP tool calls. All API keys and MCP connections for the team use the same allowance. Creating another key or connection does not increase it.

One question can require several MCP tool calls, so the allowance counts requests rather than questions. Anything else that uses the team's API keys draws on the same allowance, including [Data Studio](looker-studio.md) reports. A report set to refresh in real time can use up the requests your assistant needs.

When the allowance is used up, requests are temporarily limited until capacity becomes available again. A separate short-term limit also prevents too many requests arriving at once. For higher hourly limits, [contact us](https://plausible.io/contact).

## What the connection can access

The MCP server provides read-only access to your analytics. It can list the sites available to you in the authorized team and query their analytics.

It cannot change settings or create, edit or delete sites and goals. Selecting a team does not grant access to sites you otherwise cannot access.

## Privacy and access

Connecting an AI assistant is optional. When it queries Plausible, the returned analytics data is shared with that provider and handled under its terms and privacy settings. Review those settings before connecting, particularly when working with client or company data.

Plausible processes and stores visitor data on its European infrastructure. Your chosen assistant may process the stats it receives elsewhere. Connecting through MCP does not add tracking to your website.

## Manage connected apps

Open [Connected apps](https://plausible.io/settings/connected-apps) in your Plausible account settings to see the apps you have authorized, the team each app is connected to and when it was last used.

To disconnect an app, find the connection and revoke its access. The app will need to be authorized again to reconnect. Revoking access stops future access; it does not remove results already shared with the assistant.

## Troubleshooting

### The assistant says it is connected but cannot query my stats

Check that the connection is enabled and available in the conversation you are using. Connection availability can depend on the assistant's settings and environment. Ask it to list the sites available through the Plausible connection, then try the example query above.

### Authorization never starts

Check that you entered `https://plausible.io/mcp` and that your assistant allows custom connections for your account. If authorization still does not start, check its setup guide or [contact us](https://plausible.io/contact) with the assistant name and error message.

### My site is missing

Check which team you selected during authorization and whether your Plausible account has access to the site in that team. If you selected the wrong team, authorize a connection for the correct team.

Sites you can only open as a guest are not available. Ask the team owner to add you as a team member instead.

### The assistant asks me to connect again

After a long period of inactivity, you may need to reconnect from your assistant's settings. Revoking access in **Connected apps** also requires a new authorization. If you leave a team, the connection loses access to that team.

### The assistant gets an error for custom properties or revenue

Custom properties and revenue metrics follow the team's plan. If the plan does not include them, the query returns an error instead of results. See [subscription plans](subscription-plans.md).

### The assistant says there are too many requests

This can mean the team has used its hourly [request allowance](#request-limits), or too many requests arrived in a short period. Pause and try again. If the hourly allowance is exhausted, wait for capacity to become available. API keys and Data Studio reports share the same team allowance, so their activity can also affect your assistant.

### The results differ from the dashboard

Compare the site, date range, timezone, filters and metric. Visitors, visits and pageviews are different metrics. Ask the assistant to show the dates, filters and metrics it used.

### My team's stats are locked

Ask the team owner to check the team's subscription and any notices in Plausible.

## Technical reference

- Server URL: `https://plausible.io/mcp`
- Transport: Streamable HTTP. The server is stateless and accepts `POST` requests only
- Protocol versions: `2026-07-28` and `2025-11-25`
- Authentication: OAuth 2.1 with PKCE and team selection. Clients identify themselves with a Client ID Metadata Document
- Scopes: read-only access to the team's list of sites and to their stats
- Tools: `list_sites` and `query_stats`
- Query reference: [Stats API](stats-api.md). `query_stats` accepts the same query as `POST /api/v2/query`

The query reference describes how to structure analytics queries. The MCP connection uses OAuth, so the API-key setup instructions for direct Stats API access do not apply.
