# Mora MCP

## Connect

1. User authorizes Mora MCP via OAuth in Claude or ChatGPT.
2. Endpoint: `{API}/v1/mcp` (tenant API base from Mora).
3. Webapp guides: `/connections/claude`, `/connections/chatgpt`.

If tools are missing or auth fails, stop inventing data and ask the user to reconnect MCP.

## Tool naming

Canonical names use the full MCP tool id, e.g. `mora.core.leads_list`. Do not abbreviate in instructions or replies when naming a tool.

## Writes

- Marked idempotent in domain skills: safe to retry the same intent once confirmed.
- Still confirm with the user when the change is ambiguous (wrong lead, spend, schedule).
- Prefer update over create when an id is already known.

## Errors

| Situation | Action |
| --- | --- |
| Auth / disconnected | Point to webapp connection page; do not guess data |
| Not found | Re-list or ask for id; do not invent a substitute |
| Permission denied | State missing permission; suggest profile/permissions check |
| Insufficient credits | Buy-credits path; do not retry-spend loops |
| Soft-fail / retryable (photo, places) | Surface as retryable; do not claim success |

## Timezone

Use the agency timezone from profile/org context when scheduling. Confirm local date/time with the user before `visit_create`.
