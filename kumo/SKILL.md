---
name: kumo-ui
description: Build, modify, or review React interfaces that should use Cloudflare Kumo UI (`@cloudflare/kumo`) components. Use when Codex needs to choose Kumo components, import them correctly, compose Kumo compound components, follow Kumo design tokens, or reference the Kumo component registry for UI implementation details.
---

# Kumo UI

## Core Workflow

Use Kumo UI as the first choice for Cloudflare-style React product UI.

1. Inspect the existing app before editing. Reuse established imports, layout primitives, form state patterns, and validation patterns.
2. If `@cloudflare/kumo` is not installed, add it with `pnpm add @cloudflare/kumo`.
3. Import components from `@cloudflare/kumo`; prefer named imports for only the components used.
4. Read [COMPONENTS.md](references/COMPONENTS.md) when selecting components, checking key props, or composing compound components.
5. Use Kumo primitives before building custom UI. Reach for blocks (`PageHeader`, `ResourceListPage`, `DeleteResource`) for common page-level patterns.
6. Preserve accessibility contracts: provide labels for form controls, legends for groups, `aria-label` for icon-only actions, and controlled values where the surrounding code expects controlled state.
7. Prefer Kumo tokens and component props for styling. Use `className` only for local layout, spacing, and composition that props do not cover.
8. If exact latest props are critical, fetch the live registry at `https://kumo-ui.com/api/component-registry` and reconcile against the local reference.

## Selection Guidance

- Use `Button`, `ClipboardText`, `DropdownMenu`, `MenuBar`, and `Link` for actions and command surfaces.
- Use `Input`, `InputArea`, `Select`, `Combobox`, `Checkbox`, `Radio`, `Switch`, `DatePicker`, `DateRangePicker`, `Field`, `Label`, and `SensitiveInput` for data entry.
- Use `Banner`, `Dialog`, `Popover`, `Tooltip`, `Toasty`, `Empty`, and `Loader` for feedback and overlays.
- Use `Grid`, `Surface`, `LayerCard`, `Table`, `Tabs`, `Sidebar`, `Breadcrumbs`, `Pagination`, and `CommandPalette` for structure and navigation.
- Use `Text`, `Badge`, `Code`, `Meter`, `CloudflareLogo`, and `Collapsible` for display details.

## Implementation Rules

- Do not duplicate Kumo component behavior with ad hoc HTML/CSS when a listed component exists.
- Do not hard-code colors outside Kumo token classes unless the surrounding codebase already does so for the same reason.
- Use `@phosphor-icons/react` icons where Kumo examples expect icon elements.
- Treat compound components as namespaces, for example `Table.Header`, `Table.Row`, `Sidebar.Provider`, or `Breadcrumbs.Link`, when the component reference lists subcomponents.
- For form controls with `error`, `description`, `label`, `labelTooltip`, or `required`, prefer the built-in props over hand-rolled wrappers.
- For destructive flows, prefer the `DeleteResource` block or a `Dialog` plus destructive `Button` variants.

## Verification

After editing UI code, run the repo's relevant typecheck, lint, test, or build command. If the app has a browser surface and the change affects layout, inspect it with a local dev server or screenshot workflow.
