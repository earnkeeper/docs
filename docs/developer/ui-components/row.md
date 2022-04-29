# Row

Wrap components in a [Bootstrap Row](https://getbootstrap.com/docs/5.0/layout/grid/).

## Supported Properties

| Name     | Type         | Description                                                                     |
| -------- | ------------ | ------------------------------------------------------------------------------- |
| children | UiElement\[] | The UiElements to render inside this control, same as React `children` property |

## Examples

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
