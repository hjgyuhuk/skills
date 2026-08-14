---
name: development_context
description: Generate or update .agents/CONTEXT.md (static/structural architecture), .agents/CODE.md (sparse semantic code graph) and .agents/STATE.md (dynamic progress, lessons learned, and next steps). Use when user asks to summarize project status, create handoff docs, update AI context files, or record engineering lessons.
---

# Development Context System

Maintain three decoupled context files with distinct change frequencies:

1. `.agents/CONTEXT.md`: Static system invariants, architecture (Low Churn).
2. `.agents/CODE.md`: Sparse semantic code graph for navigation (Medium Churn).
3. `.agents/STATE.md`: Dynamic progress, lessons learned, and next steps (High Churn).
---

## 1. Output Structure for `.agents/CONTEXT.md` (Static Baseline)

Always produce this Markdown structure for the core system definition:

```markdown
---
name: context
description: Static system invariants, architecture.
---

# Goal
- ...

# Invariants & Constraints (Universal Properties)
- [Domain] Non-negotiable structural rules or safety invariants...

# Critical Environment & Boundaries
- [Environment] Critical runtime, platform, dependency, or deployment constraints...
- [Boundaries] Explicit limits on scope, access, compatibility, or operational behavior...
```

---

## 2. Output Structure for `.agents/CODE.md` (Code Graph)

Always produce this Markdown structure for the code graph:

```markdown
---
name: code
description: Sparse directed semantic graph of the codebase. Keep only important code concepts and meaningful relationships to help an agent decide what to inspect next.
---

# Code Graph

Order
├── creates → OrderCreated
├── uses → Pricing
├── persists → OrderRepository
└── handled-by → CreateOrder

Payment
├── uses → PaymentGateway
└── emits → PaymentCompleted

Order          → src/domain/order.ts
CreateOrder    → src/application/create-order.ts
OrderRepository → src/domain/order-repository.ts
```

Generate a sparse directed semantic graph of the codebase.
Keep only important code concepts (modules, core classes, services, interfaces, events, etc.) and meaningful relationships (calls, uses, implements, creates, depends, etc.), with source paths when useful.
Do not explain code, enumerate dependencies, or reproduce the architecture; only capture relationships that help an agent decide what to inspect next.
Keep the graph minimal, stable, and navigable. The source code remains the authoritative source of detail.

---

## 3. Output Structure for `.agents/STATE.md` (Dynamic State & Memory)

Always produce this Markdown structure for active state and execution history:

```markdown
---
name: state
description: Dynamic progress, lessons learned, and next steps.
---

# Active Phase & Focus

* Current Sprint / Focus: ...

# Progress

## Done

* [Task] [Verification Proof: test passed / metric confirmed]

## In Progress

* ...

## Blocked

* ...

# Lessons Learned (Monadic Abstraction)

## ❌ Anti-patterns & Failed Hypotheses

* [Generalized Anti-pattern] — [Root Cause] — [Symptom / Detection Method]

## ✅ Viable Paths & Confirmed Patterns

* [Confirmed Approach] — [Why it holds invariant / Safe Reason]

# Key Decisions & Trade-offs

* [Decision] — [Why Chosen] — [Alternatives Rejected]

# Immediate Next Steps

* ...
```

---

## Workflow

1. **Gather Input** — collect codebase status, git logs, diffs, test outputs, and existing `.agents/` files.
2. **Route Information**:

* Route system goals, file structure, invariants, and architecture flows to `.agents/CONTEXT.md`.
* Route active status, recent failures, proofs of completion, and immediate tasks to `.agents/STATE.md`.
* Route important code concepts and meaningful relationships to `.agents/CODE.md`.

3. **Analyze & Lift** — in `STATE.md`, abstract specific execution errors into generalized Anti-patterns instead of dumping raw error logs.
4. **Garbage Collection (GC)**:

* If `.agents/STATE.md` exceeds ~150 lines, archive obsolete progress or resolved lessons to `.agents/STATE_ARCHIVE.md`.

5. **Draft & Diff** — update both files ensuring clear separation of concern.
6. **Verify** — ensure every "Done" task in `STATE.md` includes explicit verification proof.

---

## Rules

* **Strict Separation of Concerns**: Never put ephemeral tasks or error logs inside `CONTEXT.md`. Never hardcode static architecture diagrams inside `STATE.md`.
* **Enforce Invariants**: Never mark a path as "Viable" in `STATE.md` if it violates any defined Invariant in `CONTEXT.md`.
* **Error Compression**: Merge similar mistakes into high-level Anti-pattern rules.
* Keep both files lean, highly structured, and optimized for LLM Attention.
