# Card

Cards provide a flexible and extensible content container with multiple variants and options.

[https://reactstrap.github.io/?path=/docs/components-card--card](https://reactstrap.github.io/?path=/docs/components-card--card)

## Example Usage

## Supported Properties

| Name     | Type         | Description                                                                                      |
| -------- | ------------ | ------------------------------------------------------------------------------------------------ |
| title    | string       | The card title                                                                                   |
| children | UiElement\[] | The UiElements to render inside this the body of this control, same as React `children` property |

## Examples

### TypeScript

```javascript
Card({
  title: "Example title",
  children: [Span({ content: "An Example Body" })],
});
```
