---
name: meta
description: List and create Meta ad campaigns for the brokerage via Mora MCP. Use when the user asks about Meta campaigns, ad sets, or Meta connection status.
license: Apache-2.0
metadata:
  author: mora-ia
  pack: marketing
---

# Meta campaigns

Requires Mora MCP connected and a linked Meta account in Mora.

## Tools

- `mora.core.meta_campaigns_list`
- `mora.core.meta_campaign_create` (idempotent; needs manage permission)

## Do

1. List existing campaigns before creating.
2. Confirm spend-related create with the user.
3. If Meta is disconnected, point to `/connections/meta` in the webapp.

## Don't

- Invent campaign or ad account IDs.
- Create campaigns without explicit user intent.
