---
name: visits
description: >
  List, create, and update Mora property visits via MCP. Use when scheduling
  visits, visitas, confirming attendance, or checking visit status. Do not use
  for lead stage-only changes, listing edits, or Meta campaigns.
license: Apache-2.0
compatibility: Requires Mora MCP OAuth at {API}/v1/mcp. Follow mora-core for shared rules.
metadata:
  author: mora-ia
  pack: crm
  version: "1.0.0"
---

# Visits

Requires Mora MCP (`mora.core.*`). Install `mora-core` alongside this skill for full shared conventions.

## Shared rules

No invented visit IDs. Confirm lead identity and local date/time before create. Prefer update over duplicate create. Prefer MCP over guessing.

## Tools

- `mora.core.visits_list`
- `mora.core.visit_create` (idempotent)
- `mora.core.visit_update` (idempotent)
- `mora.core.attendance_create` — logged interactions

## Workflow

1. Tie visits to a known lead and property when possible (`leads` / `properties` skills).
2. Confirm date/time in the agency timezone before create.
3. Prefer update over duplicate create.

## Don't

- Schedule without confirming lead identity.
- Invent visit IDs.

## References

- Example flows: [references/examples.md](references/examples.md)

## Related

- Lead context → `leads` skill
- Property context → `properties` skill
