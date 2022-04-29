# Fragment

Wrap components in a [React Fragment](https://reactjs.org/docs/fragments.html), use this instead of a div when grouping components without wanting to render an html container.

## Example Usage

<https://earnkeeper.io/game/splinterlands/leaderboard>

## Supported Properties

EarnKeeper does not support all properties of the underlying control, the currently supported properties are below.

| Name     | Type         | Description                                                                     |
| -------- | ------------ | ------------------------------------------------------------------------------- |
| children | UiElement\[] | The UiElements to render inside this control, same as React `children` property |

## Example

### TypeScript

```typescript
Fragment({
    children: [
      Row({
        className: 'mb-2',
        children: [
          Col({
            className: 'col-auto',
            children: [
              PageHeaderTile({
                title: 'Saved Teams',
                icon: 'cil-cart',
              }),
            ],
          }),
        ],
      }),
      Span({
        className: 'd-block mt-1 mb-2 font-small-4',
        content:
          'Save teams from the battle planner to review later, and check current prices before buying',
      }),
    ],
});
```
