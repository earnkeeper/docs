# Button

## Supported Properties

EarnKeeper does not support all properties of the underlying control, the currently supported properties are below.

| Name      | Type    | Description                                       |
| --------- | ------- | ------------------------------------------------- |
| label     | string  |                                                   |
| isSubmit? | boolean |                                                   |
| isBusy?   | boolean | The list of components to render in the card body |

## Examples

### JSON

```json
```

### TypeScript

```javascript
Card({
  title: "Example title",
  children: [Span({ content: "An Example Body" })],
});
```
