# Table

Render informtion in a tabular format

## Example Usage

To view a table implementation, click any element in the `Datatable` on this page
<https://earnkeeper.io/game/splinterlands/marketplace>

## Supported Properties

| Name        | Type                          | Description                              |
| ------------| -------------------------     | -----------                              |
| header?     | (string \| Rpc)[]           |  Optional header for the table           |
| body        | (string \| number \| Rpc)[] |  Body for the table UI element           |
| width?      | (string \| number \| Rpc)[] |  Optional table width                    |

## Example

### TypeScript

```typescript
Table({
    className: 'w-100',
    widths: ['32px', , '16px'],
    body: props.rows.map((row) => [
      Row({
        children: [
          Col({
            className: 'col-auto pr-0 w-3',
            children: [],
          }),
          Col({
            children: [],
          }),
          Col({
            className: 'col-auto mr-1 text-right',
            children: [],
          }),
        ],
      }),
    ]),
})
```
