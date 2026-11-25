# Mora Skills

Agent Skills for Claude and ChatGPT, paired with the Mora MCP (`/v1/mcp`).

Keep each `SKILL.md` short. Details go in `references/` only when needed.

## Packs

| Skill | Use when |
| --- | --- |
| [`leads`](skills/leads/SKILL.md) | Queue, reply, stage, summary |
| [`properties`](skills/properties/SKILL.md) | Listings and developments |
| [`visits`](skills/visits/SKILL.md) | Schedule and update visits |
| [`meta`](skills/meta/SKILL.md) | Meta campaigns |
| [`profile`](skills/profile/SKILL.md) | Org profile, permissions, AI quota |

## Install

1. Connect Mora MCP in Claude or ChatGPT (OAuth). URL: `{API}/v1/mcp`.
2. Download a skill folder (or the whole repo).
3. Claude.ai → Settings → Capabilities → Skills → Upload.
4. Or Claude Code: copy into `.claude/skills/` / project skills.

Webapp guides: `/connections/claude` and `/connections/chatgpt`.

## Layout

```text
skills/
  <name>/
    SKILL.md
    references/   # optional, on demand
```

Spec: [Agent Skills](https://agentskills.io/specification).
