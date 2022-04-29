# Modal Header

Header section for a modal UI component.

## Example Usage

Click on any card from in the `Datatable` on this page <https://earnkeeper.io/game/splinterlands/marketplace>

## Supported Properties

EarnKeeper does not support all properties of the underlying control, the currently supported properties are below.

| Name           | Type            | Description |
| -------------- | --------------  | ----------- |
| content?       |string \| Rpc    |  Optional content to render in the modal header         |
| children?      | UiElement[  ]   |  Optional collection of UI element to be displayed in the modal header           |

## Examples

### TypeScript

```typescript
 ModalHeader({
    children: [Span({ content: 'Save Team' })],
}),
```
