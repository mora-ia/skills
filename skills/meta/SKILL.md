---
name: meta
description: >
  List and create Meta ad campaigns for the brokerage via Mora MCP. Use when
  the user asks about Meta campaigns, anúncios, ad sets, or Meta connection
  status. Do not use for organic leads, visits, listings, or AI credits.
license: Apache-2.0
compatibility: Requires Mora MCP OAuth at {API}/v1/mcp and a linked Meta account. Follow mora-core.
metadata:
  author: mora-ia
  pack: marketing
  version: "1.0.0"
---

# Meta campaigns

Requires Mora MCP and a linked Meta account. Install `mora-core` alongside this skill for full shared conventions.

## Shared rules

No invented campaign/ad-account IDs. List before create. Confirm spend with the user. Prefer MCP over guessing.

## Tools

- `mora.core.meta_campaigns_list`
- `mora.core.meta_campaign_create` (idempotent; needs manage permission)

## Workflow

1. List existing campaigns before creating.
2. Confirm spend-related create with the user.
3. If Meta is disconnected, point to `/connections/meta` in the webapp.

## Don't

- Invent campaign or ad account IDs.
- Create campaigns without explicit user intent.

## Related

- Permissions / plan → `profile` skill
