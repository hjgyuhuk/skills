---
name: ai-first-architecture
description: Organize code for AI-friendly development using vertical slice architecture. Use when designing project structure, organizing code modules, or refactoring for context locality.
---

# AI-First Architecture

Core goal: minimize the global understanding needed for any single task.

## Structure

```
src/
├── user/
│   ├── login/
│   ├── register/
│   └── profile/
├── order/
│   ├── create/
│   ├── cancel/
│   └── detail/
├── payment/
│   ├── pay/
│   └── refund/
├── infrastructure/
├── shared/
└── main/
```

## Principles

**Vertical Slice** — Organize by business capability, not Controller/Service/Repository layers. Each feature is a self-contained world.

**Locality First** — AI needs minimal context to modify a feature. Prefer context locality over global abstraction. Allow moderate duplication.

**Stable Boundaries** — Slices interact through small, stable contracts. Never depend on another slice's internals.

**Thin Platform** — `infrastructure/` and `shared/` hold only truly stable, cross-cutting concerns. Avoid `BaseService`, `GenericRepository`, `AbstractFactory`, `Manager`.

**Root-Level Domains** — Business modules live at `src/` root. The directory tree is the domain map. No extra `features/` layer.

**Complexity-Driven Depth** — Don't predefine directory depth. Start simple.

**Explicit Code Graph** — Maintain a minimal dependency map: who lives where, who depends on what, which boundaries never cross. Read this before reading code.

## Summary

AI-First = Vertical Slice + Locality + Stable Boundaries + Thin Platform + Explicit Graph

Make each business a small world with stable borders, not one abstract system requiring global understanding.
