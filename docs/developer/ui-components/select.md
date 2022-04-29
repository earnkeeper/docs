# Select

UI component based on the html `Select` element

## Example Usage

<https://earnkeeper.io/game/thetan-arena/market-buy>

## Supported Properties

| Name             | Type                   | Description      |
| ---------------- | ---------------------  | -----------      |
| isClearable?     | boolean \| Rpc         |                  |
| label?           | string \| Rpc          | Optional label for the select element    |
| name             | string                 |  Name for the select element                |
| options          | (string \| Rpc[])    | options to render in the select element                 |
| width?           |  number \| string \| Rpc | Optional width for the select element                 |
| minWidth?        | number \| string \| Rpc  | Optional minimun width for the select element               |
| maxWidth?        | number \| string \| Rpc  | Optional maximum width for the select element                 |

## Example

### TypeScript

```typescript
Select({
    label: 'League',
    name: 'leagueGroup',
    options: [...LEAGUE_GROUPS.map((it) => it.name)],
    minWidth: 160,
}),
```
