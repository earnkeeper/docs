# Modal

Popup page which is rendered on top of another page

## Example Usage

Click on any card from in the `Datatable` on this page <https://earnkeeper.io/game/splinterlands/marketplace>

## Supported Properties

EarnKeeper does not support all properties of the underlying control, the currently supported properties are below.

| Name               | Type           | Description                                                                     |
| ------------------ | -------------- | ------------------------------------------------------------------------------- |
| id                 | string         | Unique modal identifier                                                         |
| backdrop?          | boolean \| Rpc | TODO                                                                            |
| backdropClassName? | string \| Rpc  | TODO                                                                            |
| centered?          | boolean \| Rpc | Optional center alignment for the modal                                         |
| children           | UiElement\[]   | The UiElements to render inside this control, same as React `children` property |
| contentClassName?  | string \| Rpc  | Optional style definition for modal content                                     |
| fade?              | boolean \| Rpc | Optional fade fade animation for the modal                                      |
| modalClassName?    | string \| Rpc  | Optional modal class name for applying styles                                   |
| scrollable?        | boolean \| Rpc | Optional scrollable switch for the modal                                        |
| size?              | string \| Rpc  | Optional modal size                                                             |
| wrapClassName?     | string \| Rpc  | Optional class wrapper for the modal                                            |

## Example

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
