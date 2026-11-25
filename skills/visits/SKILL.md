---
name: visits
description: List, create, and update Mora property visits via MCP. Use when scheduling visits, confirming attendance, or checking visit status.
license: Apache-2.0
metadata:
  author: mora-ia
  pack: crm
---

# Visits

Requires Mora MCP connected (`mora.core.*`).

## Tools

- `mora.core.visits_list`
- `mora.core.visit_create` (idempotent)
- `mora.core.visit_update` (idempotent)
- Related: `mora.core.attendance_create` for logged interactions

## Do

1. Tie visits to a known lead and property when possible.
2. Confirm date/time in the agency timezone before create.
3. Prefer update over duplicate create.

## Don't

- Schedule without confirming the lead identity.
- Invent visit IDs.
