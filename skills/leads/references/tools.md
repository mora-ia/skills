# Leads tools

Canonical MCP tool ids. Exact schemas come from the live MCP connector—prefer tool descriptors over this file when they differ.

## `mora.core.leads_list`

Queue with filters (stage, attention, search, pagination as exposed by MCP).

**Do:** Start here for “what’s in the funnel?” before updating a single lead.

## `mora.core.leads_summary`

Totals and attention counts for the org/queue.

**Do:** Use for dashboards and “how many need attention?”.

## `mora.core.lead_get`

Single lead by id.

**Do:** Load before `lead_update` when the user names one lead.

## `mora.core.lead_update`

Idempotent write: stage, note, return flags as supported by MCP.

**Do:** Confirm target lead + intended stage/note with the user when unclear.
**Don't:** Invent stage names outside the product vocabulary returned by MCP.
