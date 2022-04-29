# Card

Cards provide a flexible and extensible content container with multiple variants and options.

[https://reactstrap.github.io/?path=/docs/components-card--card](https://reactstrap.github.io/?path=/docs/components-card--card)

## Example Usage

<https://earnkeeper.io/game/splinterlands/marketplace>

## Supported Properties

EarnKeeper does not support all properties of the underlying control, the currently supported properties are below.

| Name     | Type         | Description                                                                                      |
| -------- | ------------ | ------------------------------------------------------------------------------------------------ |
| title    | string       | The card title                                                                                   |
| children | UiElement\[] | The UiElements to render inside this the body of this control, same as React `children` property |

## Example

### TypeScript

```typescript
Card({
className: 'mt-2',
  children: [
    StatsTable({
      rows: [
        {
          name: 'Price',
          value: formatCurrency(
            '$.price',
            '$.fiatSymbol',
          ),
        },
        {
          name: 'Level',
          value: '$.level',
        },
      ],
    }),
  ],
}),
```
