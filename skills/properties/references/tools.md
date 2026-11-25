# Properties tools

Use full tool ids. Prefer live MCP descriptors when they differ from this note.

## Inventory

| Tool | Role |
| --- | --- |
| `mora.core.properties_list` | Search / filter listings |
| `mora.core.property_get` | One property by id |
| `mora.core.property_update` | Patch fields the user requested (idempotent when supported) |
| `mora.core.developments_list` | List developments |
| `mora.core.development_get` | One development |

## Enrichment

| Tool | Role |
| --- | --- |
| `mora.core.property_enrich_places` | Nearby places; may soft-fail—retryable |
| `mora.core.property_photo_from_url` | Ingest photo from URL; do not paste binary bytes |

## Update rules

- Merge only requested fields.
- Never invent price, area, address, or amenities.
- If address is missing and required, ask—do not fabricate.
