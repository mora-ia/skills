---
name: profile
description: Read Mora org profile, permissions, billing access, and AI credit quota via MCP. Use when checking who is signed in, plan status, or remaining AI credits.
license: Apache-2.0
metadata:
  author: mora-ia
  pack: account
---

# Profile and quota

Requires Mora MCP connected (`mora.core.*`).

## Tools

- `mora.core.profile_get` — org, actor, permissions, billing, quota, MCP counts
- `mora.core.quota_get` — period usage
- `mora.core.credits_spend` — only when the product flow requires it (idempotent)

## Do

1. Use profile/quota for context; do not invent remaining credits.
2. Treat insufficient credits as a buy-credits path, not a retry loop.

## Don't

- Spend credits unless the user or product flow asks for it.
- Expose service keys or tokens.
