# Form

Display a form to the user to prompt for entry. The form value will be stored in client state and sent to the plugin on each state update.

Access it with `event.state.forms["FORM_NAME"]`

## Example Usage

<https://earnkeeper.io/game/splinterlands/cards>

## Supported Properties

| Name      | Type          | Description                                                                                                |
| --------- | ------------- | ---------------------------------------------------------------------------------------------------------- |
| name      | Rpc \| string | A name for the form, used by your plugin to access form values                                             |
| children  | UiElement\[]  | The UiElements to render for the form, same as React `children` property. E.g. Input, Select, Button etc.. |
| onSubmit? | boolean       | Run an RPC when submitting the form                                                                        |
| schema    | any           | The [JsonSchema](https://json-schema.org/) describing the form value                                       |

## Example

### TypeScript

```typescript
Form({
    name: 'collection',
    schema: {
      type: 'object',
      properties: {
        playerName: 'string',
      },
      default: DEFAULT_COLLECTION_FORM,
    },
    children: [
      Row({
        className: 'mb-1',
        children: [
          Col({
            className: 'col-12 col-md-auto',
            children: [
              Input({
                label: 'Player Name',
                name: 'playerName',
              }),
            ],
          }),
          Col({
            className: 'col-12 col-md-auto my-auto',
            children: [
              Button({
                label: 'View',
                isSubmit: true,
                busyWhen: isBusy(collection(CollectionDocument)),
              }),
            ],
          }),
        ],
      }),
    ],
});
```
