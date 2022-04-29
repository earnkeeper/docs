# Modal

Display a modal popup to the user.

## Supported Properties

| Name               | Type           | Description                                                                     |
| ------------------ | -------------- | ------------------------------------------------------------------------------- |
| id                 | string         | Unique modal identifier                                                         |
| backdrop?          | boolean \| Rpc | Show a backdrop behind the modal                                                |
| backdropClassName? | string \| Rpc  | Add additional class names to the modal backdrop                                |
| centered?          | boolean \| Rpc | Center the modal vertically on the page                                         |
| children           | UiElement\[]   | The UiElements to render inside this control, same as React `children` property |
| contentClassName?  | string \| Rpc  | Add additional class names to the modal content                                 |
| fade?              | boolean \| Rpc | Add a fade in and fade out animation to the modal                               |
| modalClassName?    | string \| Rpc  | Add additional class names to the modal itself                                  |
| size?              | string \| Rpc  | Horizontal size of the modal, one of `sm`, `md`, `lg`                           |

<<<<<<< HEAD
## Example
=======
## Examples
>>>>>>> 6c257fd659ca77ea1eac62c9c9aeea0541adcd23

### TypeScript

```typescript
Modal({
    id: DETAILS_MODAL_ID,
    centered: true,
    size: 'lg',
    header: '$.name',
    children: [
      ModalBody({
        children: []
      }),
    ],
});
```
