---
name: properties
description: >
  Read and update Mora property inventory and developments via MCP. Use when
  the user asks about listings, imóveis, empreendimentos, or property details.
  Do not use for lead funnel, visit scheduling, Meta ads, or AI quota.
license: Apache-2.0
compatibility: Requires Mora MCP OAuth at {API}/v1/mcp. Follow mora-core for shared rules.
metadata:
  author: mora-ia
  pack: crm
  version: "1.0.0"
---

# Properties

Requires Mora MCP (`mora.core.*`). Install `mora-core` alongside this skill for full shared conventions.

## Shared rules

No invented prices/areas/addresses. Read before write; patch only requested fields. Soft-fails (photo/places) are retryable—never claim success. Prefer MCP over guessing.

## Tools

- `mora.core.properties_list`
- `mora.core.property_get`
- `mora.core.property_update`
- `mora.core.developments_list`
- `mora.core.development_get`
- `mora.core.property_enrich_places` — nearby places (soft-fail / retryable)
- `mora.core.property_photo_from_url` — ingest photo by URL

## Workflow

1. Read before write; change only fields the user asked for.
2. Surface blocking gaps (e.g. address) instead of guessing.
3. Treat photo/places failures as retryable when the tool says so.

## Don't

- Fabricate prices, areas, or addresses.
- Upload binary photo bytes from the chat host; use MCP tools.

## References

- Tool notes: [references/tools.md](references/tools.md)
- Example flows: [references/examples.md](references/examples.md)

## Related

- Tie listing to a lead → `leads` skill
- Schedule visit → `visits` skill
