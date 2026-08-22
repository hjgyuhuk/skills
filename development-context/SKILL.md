---
name: development_context
description: Generate or update .agents/CONTEXT.md (static facts), .agents/CODE.md (code navigation graph), .agents/STATE.md (current progress and active policies), and .agents/DECISIONS.md (anti-patterns, confirmed patterns, decisions and trade-offs). Use when user asks to summarize project status, create handoff docs, update AI context files, or record engineering lessons.
---

# Development Context

Four files, each answers one question:

| File | Question | Churn |
|------|----------|-------|
| `.agents/CONTEXT.md` | What is this world — static facts | Low |
| `.agents/CODE.md` | Where things are — code navigation | Medium |
| `.agents/STATE.md` | What am I doing now — progress + active policies | High |
| `.agents/DECISIONS.md` | What did we learn — history distilled | Append-mostly |

Each file opens with frontmatter that makes it self-describing — an agent can read and maintain it from the description alone, without loading this skill.

## CONTEXT.md — Static Facts

```markdown
---
name: context
description: Static facts of this project — what this world is. Holds goal, invariants, and environment boundaries true for months. Update only when a durable fact changes. Never add tasks, progress, or code locations here.
---

# Goal
- ...

# Invariants
- Non-negotiable structural rules and safety constraints

# Environment & Boundaries
- Runtime, platform, dependency, deployment constraints
- Explicit limits on scope, access, compatibility
```

Only facts that hold for months. No tasks, no progress, no code locations.

## CODE.md — Structural Navigation

```markdown
---
name: code
description: Sparse code navigation graph — where things are. Important concepts and relationships mapped to source paths, only edges that help an agent decide what to read next. Update when structure moves. Source code stays authoritative — never explain code here.
---

# Code Graph

Order
├── uses → Pricing
├── persists → OrderRepository
└── emits → OrderCreated

Order           → src/domain/order.ts
OrderRepository → src/domain/order-repository.ts
```

Important concepts and their relationships, mapped to source paths.
Keep only edges that help an agent decide what to read next.
The source code stays authoritative — never explain code here.

## STATE.md — Current State

```markdown
---
name: state
description: Current work state — what I am doing now. Holds focus, verified progress, active policies, and next steps, written as a handoff for the next session. Policies are active rules lifted from DECISIONS.md, not history. Keep under ~100 lines — graduate lessons to DECISIONS.md, delete superseded progress.
---

# Now
- Current focus: ...

# Progress
- [Task] — verified by [test passed / metric confirmed]

# Policy
- [Rule in effect for current work, lifted from DECISIONS.md]

# Next
- ...
```

Write it as a handoff for the next session. Policies are active rules, not history.

## DECISIONS.md — Historical Knowledge

```markdown
---
name: decisions
description: Historical knowledge — what we learned. Anti-patterns, confirmed patterns, and decisions with trade-offs, distilled and generalized. Append-only — raw error logs never land here. When an entry constrains current work, restate it as a Policy line in STATE.md.
---

# Anti-patterns
- ❌ [generalized anti-pattern] — [root cause] — [symptom / how to detect]

# Confirmed Patterns
- ✅ [approach] — [why it holds]

# Decisions & Trade-offs
- [decision] — [why chosen] — [alternative rejected]
```

Append distilled knowledge only. Raw error logs never land here — generalize first.

## Workflow

1. **Read** — existing `.agents/` files, git log/diff, test output.
2. **Route** — every piece of information by its question:
   - Stable for months → CONTEXT.md
   - Where code lives → CODE.md
   - Changing right now → STATE.md
   - Distilled lesson or choice → DECISIONS.md
3. **Write** — touch only the files that changed.
   - When history constrains current work, restate it as a Policy line in STATE.md.
   - Never mark work done if it violates a Policy or a CONTEXT invariant.
   - Keep STATE.md under ~100 lines: graduate lessons to DECISIONS.md, delete superseded progress.
