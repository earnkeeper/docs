# Modal Body

Wrapper for element to display in the body section of a `Modal` UI component.

## Example Usage

Click on any card from in the `Datatable` on this page <https://earnkeeper.io/game/splinterlands/marketplace>

## Supported Properties

| Name     | Type         | Description                                                                     |
| -------- | ------------ | ------------------------------------------------------------------------------- |
| children | UiElement\[] | The UiElements to render inside this control, same as React `children` property |

## Example

### TypeScript

```typescript
ModalBody({
    children: [
        Form({
        name: 'savedTeams',
        onSubmit: hideModal(PROMPT_DECK_NAME_MODAL_ID),
        schema: {
            type: 'object',
            properties: {
                id: 'string',
                teamName: 'string',
            },
            default: {
                id: '$.id',
                teamName: formatTemplate('{{ summonerName }} Team', {
                    summonerName: '$.summonerName',
            }),
            edition: '$.edition',
            },
            required: ['teamName'],
        },
        multiRecord: {
            idField: 'teamName',
        },
        children: [],
        }),
    ],
})
```
