# Badge

Display text or other content surrounded by a [Bootstrap badge](https://getbootstrap.com/docs/4.0/components/badge/).

## Example Usage

<https://earnkeeper.io/game/splinterlands/history>

## Supported Properties

| Name     | Type         | Description                                                                                                 |
| -------- | ------------ | ----------------------------------------------------------------------------------------------------------- |
| color?   | string       | One of the [bootstrap theme colors](https://getbootstrap.com/docs/5.0/customize/color/), defaults to `None` |
| children | UiElement\[] | The UiElements to render inside this control, same as React `children` property                             |

## Example

### TypeScript

```typescript
Badge({
    color: switchCase('$.result', { Loss: 'danger', Win: 'success' }),
    children: [Span({ content: '$.result' })],
}),
```
