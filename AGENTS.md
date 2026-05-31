# Frontier Notes Public Repository Rules

This repository is the public clean tree for Frontier Notes. Treat it as the public contribution surface, not the private working source.

## Repository Role

- This repo is public: `berkshirehathaways/frontier-notes-public`
- It must contain only public-safe source, content, and contribution files.
- Do not add private repo history, local agent state, deployment metadata, generated output, or internal handoff notes.

## Never Commit

Do not add or reintroduce:
- `.omc/`
- `.omx/`
- `.vercel/`
- `.astro/`
- `dist/`
- `node_modules/`
- `.env*`
- `docs/CLAUDE_HANDOFF.md`
- `docs/design-audit.md`
- `docs/design-variants.md`
- `src/content/essays/internal-draft-note.mdx`
- local absolute paths or agent session metadata

## Contribution Scope

This public repo primarily accepts People Archive and public content changes.

Safe common changes:
- `src/content/people/*.yaml`
- public-safe `src/content/**`
- `README.md`
- `.github/PULL_REQUEST_TEMPLATE.md`

Review carefully before accepting changes to:
- `package.json`
- `package-lock.json`
- build scripts
- Astro config
- layouts/components
- deployment or CMS config

## People Archive Entries

People entries belong in `src/content/people/<slug>.yaml`.

Requirements:
- one person per file
- lowercase, hyphenated `slug`
- public-safe information only
- no private contact details
- `relatedNotes: []` is acceptable for new entries

Expected shape:

```yaml
name: 홍길동
slug: hong-gildong
role: AI workflow builder
company: optional-project-or-company
stage: pre-company
tools:
  - Claude Code
  - GitHub
signals:
  - agent-builder
  - vibe-coding
relatedNotes: []
summary: AI 에이전트로 리서치 자동화 워크플로를 만들고 있습니다.
```

## Verification

Before pushing or merging:

```bash
npm run typecheck
npm run build
```

Before claiming the repo is clean for public use:

```bash
git ls-files | rg '^\.omc/|^\.omx/|^\.vercel/|^docs/(CLAUDE_HANDOFF|design-audit|design-variants)\.md$|^src/content/essays/internal-draft-note\.mdx$'
```

This command should return no files.
