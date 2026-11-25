---
name: profile
description: >
  Read Mora org profile, permissions, billing access, and AI credit quota via
  MCP. Use when checking who is signed in, plano, permissões, or remaining AI
  credits. Do not use for lead/property/visit CRUD or Meta campaign creation.
license: Apache-2.0
compatibility: Requires Mora MCP OAuth at {API}/v1/mcp. Follow mora-core for shared rules.
metadata:
  author: mora-ia
  pack: account
  version: "1.0.0"
---

# Profile and quota

Requires Mora MCP (`mora.core.*`). Install `mora-core` alongside this skill for full shared conventions.

## Shared rules

Never invent remaining credits. Insufficient credits → buy-credits path (no retry-spend loops). Never expose keys/tokens.

## Tools

- `mora.core.profile_get` — org, actor, permissions, billing, quota, MCP counts
- `mora.core.quota_get` — period usage
- `mora.core.credits_spend` — only when the product flow requires it (idempotent)

## Workflow

1. Use profile/quota for context; never invent remaining credits.
2. Treat insufficient credits as a buy-credits path, not a retry loop.

## Don't

- Spend credits unless the user or product flow asks for it.
- Expose service keys or tokens.
