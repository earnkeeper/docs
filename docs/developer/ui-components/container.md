# Container

Wrap components inside a page container, helps layout on larger screens

## Example Usage

<https://earnkeeper.io/game/thetan-arena/market-buy>

## Supported Properties

EarnKeeper does not support all properties of the underlying control, the currently supported properties are below.

| Name     | Type         | Description                                                                     |
| -------- | ------------ | ------------------------------------------------------------------------------- |
| children | UiElement\[] | The UiElements to render inside this control, same as React `children` property |

## Example

### TypeScript

```typescript
Container({
    children: [
      Row({
        className: 'mb-2',
        children: [
          Col({
            className: 'col-auto',
            children: [
              PageHeaderTile({
                title: 'Battle History',
                icon: 'cil-history',
              }),
            ],
          }),
        ],
      }),
      Span({
        className: 'd-block mt-1 mb-2 font-small-3',
        content:
          'Enter a player name to view, search and filter their battle history',
      }),
    ],
});
```
