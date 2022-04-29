# Card

Cards provide a flexible and extensible content container with multiple variants and options.

[https://reactstrap.github.io/?path=/docs/components-card--card](https://reactstrap.github.io/?path=/docs/components-card--card)

## Example Usage

## Supported Properties

EarnKeeper does not support all properties of the underlying control, the currently supported properties are below.

| Name     | Type         | Description                                                                                      |
| -------- | ------------ | ------------------------------------------------------------------------------------------------ |
| title    | string       | The card title                                                                                   |
| children | UiElement\[] | The UiElements to render inside this the body of this control, same as React `children` property |

## Examples

### JSON

```json
{
  "_type": "Card",
  "props": {
    "title": "An example title",
    "children": [
      {
        "_type": "Span",
        "props": {
          "content": "An example body"
        }
      }
    ]
  }
}
```

### TypeScript

```javascript
Card({
  title: "Example title",
  children: [Span({ content: "An Example Body" })],
});
```
