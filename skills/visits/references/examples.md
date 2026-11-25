# Visits examples

## Schedule

**User:** Agende visita amanhã às 15h para o lead X no imóvel Y.

**Agent:**

1. Confirm lead + property ids via MCP (leads / properties tools).
2. Confirm local date/time in agency timezone.
3. `mora.core.visit_create`.
4. Summarize confirmation from the tool result only.

## Reschedule

**User:** Remarque a visita Z para sexta 10h.

**Agent:** Prefer `mora.core.visit_update` over creating a second visit.
