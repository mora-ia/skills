---
name: leads
description: Work with Mora lead queue, summary, and updates via MCP. Use when the user asks about leads, funnel stage, broker reply, or lead summary.
license: Apache-2.0
metadata:
  author: mora-ia
  pack: crm
---

# Leads

Requires Mora MCP connected (`mora.core.*`).

## Tools

- `mora.core.leads_list` — queue with filters
- `mora.core.leads_summary` — totals and attention
- `mora.core.lead_get` — one lead
- `mora.core.lead_update` — stage, note, return (idempotent write)

## Do

1. Prefer list/summary before update.
2. Confirm stage or note changes with the user when ambiguous.
3. Keep agency tone in suggested replies.

## Don't

- Invent lead IDs or scores.
- Skip MCP when the connector is available.
