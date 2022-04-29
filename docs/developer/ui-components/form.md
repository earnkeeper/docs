# Form

Display a form to the user to prompt for entry. The form value will be stored in client state and sent to the plugin on each state update.

Access it with `event.state.forms["FORM_NAME"]`

## Supported Properties

| Name      | Type          | Description                                                                                                |
| --------- | ------------- | ---------------------------------------------------------------------------------------------------------- |
| name      | Rpc \| string | A name for the form, used by your plugin to access form values                                             |
| children  | UiElement\[]  | The UiElements to render for the form, same as React `children` property. E.g. Input, Select, Button etc.. |
| onSubmit? | boolean       | Run an RPC when submitting the form                                                                        |
| schema    | any           | The [JsonSchema](https://json-schema.org/) describing the form value                                       |

## Examples

### TypeScript

```javascript

```
