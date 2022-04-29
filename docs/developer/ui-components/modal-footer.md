# Modal Footer

Wrapper for components to render in modal footer section

## Example Usage

Click on an item from the `Datatable` found on this page
<https://earnkeeper.io/game/splinterlands/planner>

## Supported Properties

| Name     | Type          | Description                                  |
| -------- | ------------- | -------------------------------------------- |
| content? | string \| Rpc | Render a string as content inside the footer |
| children | UiElement\[]  | Render custom UI Elements inside the footer  |

<<<<<<< HEAD
## Example
=======
## Examples
>>>>>>> 6c257fd659ca77ea1eac62c9c9aeea0541adcd23

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
