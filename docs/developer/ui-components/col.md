# Col

Wrap components in a [Bootstrap Column](https://getbootstrap.com/docs/5.0/layout/columns/).

## Example Usage

<https://earnkeeper.io/game/splinterlands/history>

## Supported Properties

| Name     | Type         | Description                                                                     |
| -------- | ------------ | ------------------------------------------------------------------------------- |
| children | UiElement\[] | The UiElements to render inside this control, same as React `children` property |

## Example

### TypeScript

```typescript
Col({
className: 'col-auto',
    children: [
        PageHeaderTile({
            title: 'Card Collection',
            icon: 'cil-color-palette',
        }),
    ],
}),
```
