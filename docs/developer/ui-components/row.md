# Row

UI component for specifying element(s) to include in a row

## Example Usage

<https://earnkeeper.io/game/splinterlands/cards>

## Supported Properties

EarnKeeper does not support all properties of the underlying control, the currently supported properties are below.

| Name     | Type         | Description                                                                     |
| -------- | ------------ | ------------------------------------------------------------------------------- |
| children | UiElement\[] | The UiElements to render inside this control, same as React `children` property |

## Example

### TypeScript

```typescript
Row({
    className: 'mx-0',
    children: [
        col('col-12 p-0 font-small-1', span('$.skinName')),
        col('col-12 p-0 font-medium-2 font-weight-bold', span('$.name')),
    ],
}),
```
