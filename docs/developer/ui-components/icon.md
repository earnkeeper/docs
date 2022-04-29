# Icon

Display an icon, EarnKeeper uses the [FeatherIcons](https://feathericons.com/) and [CoreUiIcons](https://icons.coreui.io/icons/) free sets.

## Example Usage

<https://earnkeeper.io/game/splinterlands/leaderboard>

## Supported Properties

| Name   | Type          | Description                                                                                                                       |
| ------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| name\* | string        | The icon show, should be either a [FeatherIcons](https://feathericons.com/) or [CoreUiIcons](https://icons.coreui.io/icons/) name |
| size?  | string \| Rpc | Icon size, one of `sm`, `lg`, `xl`, `xxl`, @dennis                                                                                |

## Example

### TypeScript

```typescript
Icon({
  className: "filled-star",
  name: "star",
  size: "sm",
});
```
