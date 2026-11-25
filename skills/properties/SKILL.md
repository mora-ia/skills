---
name: properties
description: Read and update Mora property inventory and developments via MCP. Use when the user asks about listings, property details, or developments.
license: Apache-2.0
metadata:
  author: mora-ia
  pack: crm
---

# Properties

Requires Mora MCP connected (`mora.core.*`).

## Tools

- `mora.core.properties_list` / `property_get` / `property_update`
- `mora.core.developments_list` / `development_get`
- `mora.core.property_enrich_places` — nearby places soft-fail
- `mora.core.property_photo_from_url` — ingest photo by URL

## Do

1. Read before write; merge only fields the user asked to change.
2. Surface blocking gaps (address) instead of guessing.
3. Treat photo/places failures as retryable when the tool says so.

## Don't

- Fabricate prices, areas, or addresses.
- Upload binary photo bytes from the chat host; use MCP tools.
