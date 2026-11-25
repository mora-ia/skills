# Properties examples

## Find listings

**User:** Quais imóveis de 3 quartos em Pinheiros?

**Agent:** `mora.core.properties_list` with the filters MCP exposes; report only returned rows.

## Patch one field

**User:** Atualize o preço do imóvel X para R$ 850.000.

**Agent:**

1. `mora.core.property_get` to confirm identity.
2. Confirm the new price with the user if needed.
3. `mora.core.property_update` with only the price field.

## Photo from URL

**User:** Adicione esta foto ao imóvel: https://…

**Agent:** `mora.core.property_photo_from_url`. On soft-fail, report retryable failure—do not claim the photo was saved.
