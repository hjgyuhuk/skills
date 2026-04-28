---
name: medical-paper-writer
description: Assist medical professionals in writing academic papers using a results-driven workflow: Results → Discussion → Methods → Introduction → Abstract. Covers IMRaD structure, statistical reporting guidance, literature comparison, and academic English polishing. Use when the user needs help writing or revising medical research papers, systematic reviews, meta-analyses, clinical trial reports, or basic science manuscripts, or mentions medical paper writing, 论文写作, data interpretation, journal submission, or reviewer response.
---

# Medical Paper Writer

## Core Workflow (Results-Driven)

Discussion must be grounded in actual findings — writing order:

```
User provides data / charts / tables
    → [1] Results draft
    → [2] Discussion  ← core effort
    → [3] Methods skeleton
    → [4] Introduction + Abstract
```

## Quick Start

> When ready, share your key findings (tables/figures/core data). I will draft Results first, then we work through Discussion together.

---

## Stage 1 — Results 撰写

1. User provides: charts, tables, p-values, effect sizes (OR/RR/HR), confidence intervals
2. Identify logical groupings:
   - Baseline characteristics (Table 1)
   - Primary outcome
   - Secondary outcomes
   - Subgroup / sensitivity analyses
   - Safety / adverse events (if applicable)
3. Draft Results text — **describe only, no interpretation**
4. Verify every result text references a table/figure
5. Check captions: self-contained, define all abbreviations

---

## Stage 2 — Discussion 撰写 (Core)

For each major finding from Results, work through this sequence per finding:

1. **Principal finding** — one-sentence recap, no full number repetition
2. **Comparison with literature** — search prior studies; note whether findings agree, disagree, or extend
3. **Plausible mechanism** — biological / clinical rationale where supported
4. **Implications** — clinical relevance, public health impact, or future research direction
5. **Limitations** — grouped in final paragraph(s): bias sources, confounding, generalizability, sample size

### Discussion style rules

- One key finding per paragraph; do not mix findings
- Never claim "first" or "only" without explicit verification against literature
- Do not over-interpret beyond data range
- Past tense for your findings; present tense for established knowledge
- Cite comparisons with "[Author, Year]" inline — prompt user for formal reference insertion

---

## Stage 3 — Methods 框架 (Skeleton Only)

Output a scaffold — **user fills in specifics**:

- Study design type
- Setting & participants (inclusion/exclusion — leave placeholders)
- Intervention / exposure definition
- Outcomes (primary, secondary, timing)
- Statistical analysis — match to data type (see [REFERENCE.md] "统计方法匹配表")
- Ethical approval placeholder

Deliver as terse bullet points; do NOT fabricate details.

---

## Stage 4 — Introduction + Abstract

**Introduction**: known background → knowledge gap → study aim (funnel structure, ~3 paragraphs)

**Abstract**: structured per target journal convention (typically Background / Methods / Results / Conclusions)

---

## Academic English Checklist

Run at each stage:

- Avoid intensifiers: very, quite, remarkably, extremely
- Tense discipline: Methods/Results → past tense; Discussion conclusions → present tense; knowledge gaps → present perfect
- No dangling modifiers
- Define all abbreviations at first use in main text AND abstract separately
- Prefer precise language: "was associated with increased risk of" over "caused"

## Submission & See Also

- Draft cover letter or reviewer response (see [REFERENCE.md])
- [REFERENCE.md](REFERENCE.md) — templates, statistical matching, CONSORT/STROBE/PRISMA, rebuttal patterns
- [EXAMPLES.md](EXAMPLES.md) — worked examples from data to manuscript
