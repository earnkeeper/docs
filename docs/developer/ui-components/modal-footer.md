# Modal Footer

Wrapper for components to render in modal footer section

## Example Usage

Click on an item from the `Datatable` found on this page
<https://earnkeeper.io/game/splinterlands/planner>

## Supported Properties

EarnKeeper does not support all properties of the underlying control, the currently supported properties are below.

| Name     | Type          | Description                                                                     |
| -------- | ------------- | ------------------------------------------------------------------------------- |
| content? | string \| Rpc | Optional content to render in the modal footer                                  |
| children | UiElement\[]  | The UiElements to render inside this control, same as React `children` property |

## Example

### TypeScript

```typescript
 ModalFooter({
        children: [
          Row({
                className: 'pb-1 px-2 pt-0',
                children: [
                    Col({
                        className: 'col-auto',
                        when: { not: '$.teamName' },
                        children: [
                        Button({
                            label: 'Save Team',
                            onClick: showModal(PROMPT_DECK_NAME_MODAL_ID, '$'),
                            outline: true,
                        }),
                        ],
                    }),
                ],
          }),
        ],
    })
```
