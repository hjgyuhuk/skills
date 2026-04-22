# Kumo UI Components

Source: `https://kumo-ui.com/api/component-registry`, registry version `1.0.0`, checked 2026-04-22.

Import path unless noted: `@cloudflare/kumo`.

## Categories

| Category | Components |
| --- | --- |
| Action | `Button`, `ClipboardText` |
| Display | `Badge`, `Breadcrumbs`, `Code`, `Collapsible`, `Empty`, `LayerCard`, `Meter`, `Text` |
| Feedback | `Banner`, `Loader`, `Toasty` |
| Input | `Checkbox`, `Combobox`, `DateRangePicker`, `Field`, `Input`, `InputArea`, `Radio`, `Select`, `Switch` |
| Layout | `Grid`, `Surface`, `PageHeader`, `ResourceListPage` |
| Navigation | `CommandPalette`, `MenuBar`, `Pagination`, `Tabs` |
| Other | `CloudflareLogo`, `DatePicker`, `DeleteResource`, `Label`, `Link`, `SensitiveInput`, `Sidebar`, `Table` |
| Overlay | `Dialog`, `DropdownMenu`, `Popover`, `Tooltip` |

## Component Reference

| Component | Type | Use | Key API |
| --- | --- | --- | --- |
| `Badge` | component | Small status label for categorizing, state, beta, or token highlights. | `variant`: `primary`, `secondary`, `error`, `warning`, `success`, `info`, `beta`, `outline`, color variants; `children`, `className`. |
| `Banner` | component | Full-width notice for information, warning, or error states. | `variant`: `default`, `alert`, `error`; `icon`, `title`, `description`, `action`, `text`, `children`. |
| `Breadcrumbs` | component | Hierarchical navigation trail. | `size`: `sm`, `base`; subcomponents: `Link`, `Current`, `Separator`, `Clipboard`. |
| `Button` | component | Primary and secondary action trigger. | `variant`: `primary`, `secondary`, `ghost`, `destructive`, `secondary-destructive`, `outline`; `size`: `xs`, `sm`, `base`, `lg`; `shape`: `base`, `square`, `circle`; `icon`, `loading`, native button props. |
| `Checkbox` | component | Boolean or multi-select checkbox input. | `variant`: `default`, `error`; `label`, `labelTooltip`, `controlFirst`, `checked`, `indeterminate`, `disabled`, `name`, `required`, `onValueChange`; subcomponents: `Item`, `Group`. |
| `ClipboardText` | component | Read-only copyable text field. | `text` required; `textToCopy`, `size`: `sm`, `base`, `lg`; `tooltip`, `className`. |
| `CloudflareLogo` | component | Cloudflare brand mark. | Use for product or empty-state branding when the registry/component examples call for the logo. |
| `Code` | component | Inline or block code display. | Use instead of raw `<code>` when code snippets should match Kumo text and token styling. |
| `Collapsible` | component | Expand/collapse disclosure region. | Use for optional details, nested nav, or progressive disclosure; check live registry for trigger/content subcomponent names if exact composition matters. |
| `Combobox` | component | Searchable selection input. | Compound autocomplete/select surface; registry includes collection/item pass-through components and filtered item rendering helpers. Use for large option lists. |
| `CommandPalette` | component | Accessible command palette / spotlight search overlay. | Controlled `open`, `container`; compound pieces include `Root`/`Dialog`, `Panel`, `Input`, `List`, `Results`, `Items`, `Group`, `GroupLabel`, `Item`, `ResultItem`, `HighlightedText`, `Empty`, `Loading`, `Footer`. |
| `DatePicker` | component | Calendar date selection. | Built on `react-day-picker`; supports single, multiple, and range selection modes through day-picker-compatible props/composition. |
| `DateRangePicker` | component | Date range field/control. | Use for start/end date filtering or reporting periods; preserve label/error/description behavior from existing forms. |
| `DeleteResource` | block | Confirmation flow for deleting named resources. | `open`, `resourceType`, `resourceName` required; `size`: `sm`, `base`; `isDeleting`, `caseSensitive`, `deleteButtonText`, `errorMessage`, `className`. Depends on `Banner`, `Button`, `Dialog`, and `Input`. |
| `Dialog` | component | Modal overlay for focused workflows. | Use for confirmations, forms, and blocking detail views; prefer Kumo dialog compound parts instead of custom portal/modal code. |
| `DropdownMenu` | component | Menu of contextual actions. | Use for row actions, overflow menus, and grouped actions; combine with icon-only `Button` triggers and accessible labels. |
| `Empty` | component | Empty-state placeholder. | Use for empty tables, filtered results, and first-run states; pair with `Text`, `Button`, or `Link` actions. |
| `Field` | component | Form field wrapper with label, optional marker, error, and description. | `label`, `labelTooltip`, `error`, `description`, `required`/optional handling; prefer built-in form control label props when present. |
| `Grid` | component | Responsive CSS grid layout container. | `variant`: `2up`, `side-by-side`, `2-1`, `1-2`, `1-3up`, `3up`, `4up`, `6up`, `1-2-4up`; `gap`: `none`, `sm`, `base`, `lg`; `mobileDivider`, `children`, `className`. |
| `Input` | component | Single-line text input. | `label`, `labelTooltip`, `description`, `error`; `size`: `xs`, `sm`, `base`, `lg`; `variant`: `default`, `error`; standard input props. |
| `InputArea` | component | Multi-line textarea input using Input variants. | Synthetic component that uses `Input`; size variants map to textarea dimensions (`xs`, `sm`, `base`, `lg`). |
| `Label` | component | Standardized label text with optional indicator and tooltip. | `children`, `showOptional`, `tooltip`, `htmlFor`, `asContent`, `className`. |
| `LayerCard` | component | Compact card-like display surface with primary/secondary regions. | `children`, `className`; subcomponents: `Primary`, `Secondary`. |
| `Link` | component | Styled navigation or text link. | `variant`: `inline`, `current`, `plain`; `to`, `href`, `target`, `render`, native anchor props; subcomponent: `ExternalIcon`. |
| `Loader` | component | Animated circular loading spinner. | `size`: `sm`, `base`, `lg`; `className`. |
| `MenuBar` | component | Horizontal icon-button toolbar with tooltip and keyboard navigation. | `options` required; `isActive`, `optionIds`, `className`. Options usually provide `icon`, `id`, `tooltip`, and `onClick`. |
| `Meter` | component | Progress/meter bar for measured values. | Use for usage, quota, capacity, or progress within a known range; check registry for exact value props. |
| `PageHeader` | block | Page header with breadcrumbs, title, description, tabs, and actions. | `spacing`: `compact`, `base`, `relaxed`; `breadcrumbs`, `title`, `description`, `tabs`, `defaultTab`, `children`, `className`. Depends on `Tabs`. |
| `Pagination` | component | Paged navigation controls. | Use for table/list pagination; preserve existing routing or query-param state patterns. |
| `Popover` | component | Non-modal contextual overlay. | Use for small forms, filters, and contextual detail surfaces where `Dialog` would be too heavy. |
| `Radio` | component | Single-choice radio group. | `legend` required on group; `orientation`: `vertical`, `horizontal`; `appearance`: `default`, `card`; `error`, `description`, `value`, `disabled`, `controlPosition`, `name`; subcomponents: `Item`, `Group`. |
| `ResourceListPage` | block | Page-level resource list layout. | `title`, `description`, `icon`, `usage`, `additionalContent`, `children`, `className`. Use for dashboards/lists of resources. |
| `Select` | component | Select/dropdown input. | `label`, `hideLabel`, `placeholder`, `loading`, `disabled`, `required`, `labelTooltip`, `value`, `defaultValue`, `onValueChange`, `children`, `description`, `error`; supports `Select.Option` composition. |
| `SensitiveInput` | component | Secret/token/password-style input. | Use for API keys or values that need reveal/copy handling; follow existing security and masking patterns. |
| `Sidebar` | component | Application side navigation and layout rail. | Subcomponents include `Provider`, `Header`, `Content`, `Footer`, `Group`, `GroupLabel`, `GroupContent`, `Menu`, `MenuItem`, `MenuButton`, `MenuAction`, `MenuBadge`, `MenuSub`, `MenuSubItem`, `MenuSubButton`, `Separator`, `Input`, `Trigger`, `Rail`, `ResizeHandle`, `MenuChevron`, `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent`. `Provider` supports `defaultOpen`, `open`, `variant`, `side`, `collapsible`, `resizable`, width bounds. |
| `Surface` | component | Polymorphic container with consistent background, border, and elevation. | `as`, `render`, `children`, `className`, native container props. Use for structural surfaces, not nested decorative cards. |
| `Switch` | component | Toggle control. | `variant`: `default`, `neutral`; `size`: `sm`, `base`, `lg`; `label`, `labelTooltip`, `required`, `controlFirst`, `checked`, `disabled`, `transitioning`, `name`, `onClick`; subcomponents: `Item`, `Group`. |
| `Table` | component | Semantic table with styled rows, cells, selection, sticky columns, and resizing. | `layout`: `auto`, `fixed`; `variant`: `default`, `selected`; `sticky`: `left`, `right`; subcomponents: `Header`, `Head`, `Row`, `Body`, `Cell`, `CheckCell`, `CheckHead`, `Footer`, `ResizeHandle`. |
| `Tabs` | component | Tab navigation with segmented or underline style. | `tabs`, `value`, `selectedValue`, `activateOnFocus`, `variant`: `segmented`, `underline`; `onValueChange`, `className`, `listClassName`, `indicatorClassName`. |
| `Text` | component | Typography primitive. | `variant`: `heading1`, `heading2`, `heading3`, `body`, `secondary`, `success`, `error`, `mono`, `mono-secondary`; `size`: `xs`, `sm`, `base`, `lg`; `bold`, `truncate`, `as`, `children`. |
| `Toasty` | component | Toast notification provider and viewport. | `variant`: `default`, `success`, `error`, `warning`, `info`; `children`, `className`; built on Base UI Toast. |
| `Tooltip` | component | Accessible hover/focus popup. | `content` required; `side`: `top`, `bottom`, `left`, `right`; `children`, `className`; wrap relevant app/section with the tooltip provider when using delay grouping. |

## Import Pattern

```tsx
import { Badge, Button, Grid, Surface, Text } from "@cloudflare/kumo";
```

Use compound parts from the imported namespace when documented, for example:

```tsx
import { Table } from "@cloudflare/kumo";

export function ResourceTable() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Status</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>{/* rows */}</Table.Body>
    </Table>
  );
}
```

## Live Registry Check

For exact prop types, enum additions, example snippets, colors, or style tokens, fetch:

```text
https://kumo-ui.com/api/component-registry
```

Prefer the live registry when a prop name is not listed here or when generated code must match the current package exactly.
