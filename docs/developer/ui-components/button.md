# Button

Display a themed button, and configure its action on click

## Example Usage

<https://earnkeeper.io/game/thetan-arena/market-buy>

## Supported Properties

| Name      | Type           | Description                                                                                                                                         |
| --------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| busyWhen? | string \| Rpc  | Use an RPC to determine when to disable the button and show a busy spinner. Often used with the isBusy RPC.                                         |
| color?    | string         | This sets the color of the button                                                                                                                   |
| content?  | UiElement      | Use a custom layout for the content of this button. Start a new component tree.                                                                     |
| icon?     | string \| Rpc  | The icon show inside the button, should be either a [FeatherIcons](https://feathericons.com/) or [CoreUiIcons](https://icons.coreui.io/icons/) name |
| iconSize? | string         | The size of the icon, one of `sm`, `lg`, `xl`, defaults to `lg`                                                                                     |
| isSubmit? | boolean        | Set to true to post the current form when this button is clicked.                                                                                   |
| label     | string \| Rpc  | The label text to show inside the button. Ignored if content is set.                                                                                |
| onClick?  | Rpc            | Action to perfrom on click event                                                                                                                    |
| outline   | boolean \| Rpc | Set to true to show the button in outline style.                                                                                                    |
| size      | string         | Size of the `sm`, `lg`, defaults to `lg`                                                                                                            |

## Example

### TypeScript

#### All Properties (Content)

Use the content property to add any EK component as the child of the button. Use for complex button content.

```typescript
Button({
  busyWhen: isBusy("my_collection"),
  className: "primary",
  content: Row({
    children: [
      Col({
        children: [Icon({ name: "cil-check-circle" })],
      }),
      Col({
        children: [Span({ content: "Submit" })],
      }),
    ],
  }),
  isSubmit: true,
  outline: false,
  });
```
