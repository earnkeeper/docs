# Span

an inline UI component used to highlight part of a text

## Example Usage

<https://earnkeeper.io/game/splinterlands/planner>

## See Also

## Supported Properties

EarnKeeper does not support all properties of the underlying control, the currently supported properties are below.

| Name     | Type          | Description                                     |
| -------- | ------------- | ----------------------------------------------- |
| content? | Rpc \| string | The list of components to render inside the row |

## Example

### TypeScript

```typescript
Span({
    className: 'font-small-3',
    content: summonerName,
}),
```
