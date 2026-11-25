# Mora Skills

Agent Skills for **Claude**, **ChatGPT / Codex**, and other Agent Skills hosts, paired with Mora MCP (`{API}/v1/mcp`).

Open standard: [Agent Skills](https://agentskills.io/specification).

## Packs

| Skill | Pack | Use when |
| --- | --- | --- |
| [`mora-core`](skills/mora-core/SKILL.md) | platform | MCP auth, errors, shared safety rules |
| [`leads`](skills/leads/SKILL.md) | crm | Queue, reply, stage, summary |
| [`properties`](skills/properties/SKILL.md) | crm | Listings and developments |
| [`visits`](skills/visits/SKILL.md) | crm | Schedule and update visits |
| [`meta`](skills/meta/SKILL.md) | marketing | Meta campaigns |
| [`profile`](skills/profile/SKILL.md) | account | Org profile, permissions, AI quota |

Install **mora-core** with any domain skill (or the whole repo).

## Install

1. Connect Mora MCP (OAuth). URL: `{API}/v1/mcp`.
2. Download a skill folder (or the whole repo).
3. **Claude.ai** → Settings → Capabilities → Skills → Upload.
4. **Claude Code** → copy into `.claude/skills/` (or project skills).
5. **ChatGPT / Codex** → Skills sidebar / `$skill-installer`, or repo `.agents/skills`. Optional UI metadata lives in each skill’s `agents/openai.yaml`.

Webapp guides: `/connections/claude` and `/connections/chatgpt`.

## Layout

```text
skills/
  <name>/
    SKILL.md              # required — short router
    references/           # optional — loaded on demand
    agents/openai.yaml    # optional — ChatGPT/Codex UI metadata
```

## Authoring (Claude + OpenAI)

Aligned with [Claude skill best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices) and [OpenAI build skills](https://learn.chatgpt.com/docs/build-skills):

| Rule | Why |
| --- | --- |
| One skill = one job | Avoid routing collisions |
| Description = routing logic | Front-load triggers; include **Use when** and **Do not use when** (EN + PT terms) |
| Keep `SKILL.md` short | Progressive disclosure; details in `references/` |
| References one level deep | Hosts load linked files on demand |
| Imperative steps + examples | Clear inputs/outputs; examples only when quality depends on them |
| Prefer instructions over scripts | Scripts only for fragile/deterministic work |
| Domain skills self-contained | Safe if uploaded alone; mora-core still recommended |

### Description checklist

- Third person (WHAT + WHEN).
- Trigger keywords early (hosts may truncate long description lists).
- Explicit **Do not use when** pointing to sibling skills.
- Max 1024 characters.

### Validate

```bash
npm ci
npm run validate
```

CI runs the same gate on every PR.

## Spec fields we use

| Field | Purpose |
| --- | --- |
| `name` / `description` | Discovery (required) |
| `license` | Apache-2.0 |
| `compatibility` | Mora MCP requirement |
| `metadata.author` / `pack` / `version` | Mora packaging |
