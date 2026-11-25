---
name: mora-core
description: >
  Mora MCP shared rules—OAuth, idempotent writes, no invented IDs, agency tone,
  credits. Use when connecting MCP, handling tool errors, or applying
  cross-cutting Mora conventions. Do not use alone for lead, property, visit,
  Meta, or profile CRUD—prefer those domain skills.
license: Apache-2.0
compatibility: Requires Mora MCP OAuth at {API}/v1/mcp (Claude, ChatGPT, Codex, Cursor).
metadata:
  author: mora-ia
  pack: platform
  version: "1.0.0"
---

# Mora core

Shared conventions for every Mora skill. Domain skills own their tools; this skill owns safety and routing.

## Requires

Mora MCP connected. If disconnected, point the user to `/connections/claude` or `/connections/chatgpt` in the webapp.

## Do

1. Call MCP tools; never invent IDs, scores, prices, credits, or campaign IDs.
2. Prefer read (`list` / `get` / `summary`) before write.
3. Confirm ambiguous or irreversible writes (stage, schedule, spend, credit spend) with the user.
4. Prefer `update` over duplicate `create` when an entity already exists (idempotent writes).
5. Keep suggested client-facing text in agency tone (see [references/voice.md](references/voice.md)).

## Don't

- Fabricate tool results or soft-fail as success.
- Loop retries on insufficient credits—route to buy-credits.
- Expose service keys, tokens, or raw OAuth secrets.
- Skip MCP when the connector is available.

## References

- MCP auth, errors, idempotency: [references/mcp.md](references/mcp.md)
- Agency voice: [references/voice.md](references/voice.md)
