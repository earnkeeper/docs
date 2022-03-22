# Button

## Supported Properties

EarnKeeper does not support all properties of the underlying control, the currently supported properties are below.

| Name      | Type           | Description                                                                                                                                                 |
| --------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| busyWhen? | string \| Rpc  | Use an RPC to determine when to disable the button and show a busy spinner. Often used with the isBusy RPC.                                                 |
| content?  | UiElement      | Use a custom layout for the content of this button. Start a new component tree.                                                                             |
| icon?     | string \| Rpc  | The icon name to use to display a left justified icon in the button. Ignored if content is set. Should match CoreUI icon set names. e.g. "cil-check-circle" |
| isSubmit? | boolean        | Set to true to post the current form when this button is clicked.                                                                                           |
| label     | string \| Rpc  | The label text to show inside the button. Ignored if content is set.                                                                                        |
| outline   | boolean \| Rpc | Set to true to show the button in outline style.                                                                                                            |

## Example

### TypeScript

#### All Properties (Label and Icon)

Use the Label and Icon properties to simply show a left aligned icon and text inside the button.

```javascript
    const component = Button({
      busyWhen: isBusy('my_collection'),
      className: 'primary',
      icon: 'cil-check-circle',
      isSubmit: true,
      label: 'Submit',
      outline: false,
    });

    const json = {
      _type: 'Button',
      props: {
        busyWhen: '$..busy[?(@.id=="my_collection")]',
        className: 'primary',
        icon: 'cil-check-circle',
        isSubmit: true,
        label: 'Submit',
        outline: false,
      },
    };
```

#### All Properties (Content)

Use the content property to add any EK component as the child of the button. Use for complex button content.

```typescript
    const component = Button({
      busyWhen: isBusy('my_collection'),
      className: 'primary',
      content: Row({
        children: [
          Col({
            children: [Icon({ name: 'cil-check-circle' })],
          }),
          Col({
            children: [Span({ content: 'Submit' })],
          }),
        ],
      }),
      isSubmit: true,
      outline: false,
    });

    const json = {
      _type: 'Button',
      props: {
        busyWhen: '$..busy[?(@.id=="my_collection")]',
        className: 'primary',
        content: {
          _type: 'Row',
          props: {
            children: [
              {
                _type: 'Col',
                props: {
                  children: [
                    {
                      _type: 'Icon',
                      props: {
                        name: 'cil-check-circle',
                      },
                    },
                  ],
                },
              },
              {
                _type: 'Col',
                props: {
                  children: [
                    {
                      _type: 'Span',
                      props: {
                        content: 'Submit',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        isSubmit: true,
        outline: false,
      },
    };
```
