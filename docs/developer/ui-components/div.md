# Div

Wrap components in an html div.

## Example Usage

<https://earnkeeper.io/game/thetan-arena/boxes>

## Supported Properties

| Name     | Type         | Description                                                                     |
| -------- | ------------ | ------------------------------------------------------------------------------- |
| children | UiElement\[] | The UiElements to render inside this control, same as React `children` property |

## Example

### TypeScript

```typescript
Div({
    style: { marginTop: 6 },
    children: [span(fiat(fiatPriceRpc), 'font-small-4')],
}),
```
