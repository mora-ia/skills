---
name: leads
description: >
  Work Mora lead queue, summary, stage, and broker reply via MCP. Use when the
  user asks about leads, funil, etapa, fila, or lead summary. Do not use for
  visits scheduling, property inventory, Meta ads, or org quota.
license: Apache-2.0
compatibility: Requires Mora MCP OAuth at {API}/v1/mcp. Follow mora-core for shared rules.
metadata:
  author: mora-ia
  pack: crm
  version: "1.0.0"
---

# Leads

Requires Mora MCP (`mora.core.*`). Install `mora-core` alongside this skill for full shared conventions.

## Shared rules

No invented IDs/scores. Read before write. Confirm ambiguous stage/note changes. Agency tone for client-facing drafts. Prefer MCP over guessing.

## Tools

- `mora.core.leads_list` — queue with filters
- `mora.core.leads_summary` — totals and attention
- `mora.core.lead_get` — one lead
- `mora.core.lead_update` — stage, note, return (idempotent write)

## Workflow

1. List or summary before update.
2. Confirm stage/note changes when ambiguous.
3. Draft broker replies in agency tone; ground facts in MCP data.

## Don't

- Invent lead IDs or scores.
- Skip MCP when the connector is available.

## References

- Params and filters: [references/tools.md](references/tools.md)
- Example flows: [references/examples.md](references/examples.md)

## Related

- Schedule a visit → `visits` skill
- Listing details → `properties` skill
