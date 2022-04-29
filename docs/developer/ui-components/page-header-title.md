# Page Header Title

UI component for rendering page title and page icons based on the  [FeatherIcons](https://feathericons.com/) and [CoreUiIcons](https://icons.coreui.io/icons/) free sets

## Example Usage

<https://earnkeeper.io/game/splinterlands/cards>

## Supported Properties

EarnKeeper does not support all properties of the underlying control, the currently supported properties are below.

| Name            | Type          | Description |
| --------------- | ------------- | ----------- |
| image?          | Rpc \| string | Optional image for the page header title            |
| icon?           | Rpc \| string | Optional icon for the page header title             |
| returnLocation? | Rpc \| string | Optional return location     TODO                       |
| subTitle?       | Rpc \| string | Optional sub title the page header                  |
| title           | Rpc \| string | Title for the page header                           |

## Example

### TypeScript

```typescript
PageHeaderTile({
    title: 'Card Collection',
    icon: 'cil-color-palette',
 }),
```
