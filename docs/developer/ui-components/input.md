# Input

Display an Input to the user.

## Example usage

<https://earnkeeper.io/game/splinterlands/planner>

## Supported Properties

| Name   | Type          | Description                          |
| ------ | ------------- | ------------------------------------ |
| label? | string \| Rpc | The label to display above the input |
| name   | string        | Name for the input UI element        |

## Example

### TypeScript

```typescript
Input({
    label: 'Player Name',
    name: 'playerName',
}),
```
