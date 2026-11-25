# Leads examples

## Summary first

**User:** Quantos leads precisam de atenção?

**Agent:** Call `mora.core.leads_summary`, then report totals from the tool result only.

## Stage change

**User:** Mova o lead X para visita marcada.

**Agent:**

1. `mora.core.lead_get` (or list) to confirm identity.
2. Confirm stage with the user if the phrasing is ambiguous.
3. `mora.core.lead_update` with the confirmed stage.
4. Offer next step (schedule visit via visits skill) if appropriate.

## Broker reply draft

**User:** Sugira uma resposta para o lead que perguntou o valor.

**Agent:** Load the lead via MCP, draft in agency tone using only known price/facts, do not invent financing terms.
