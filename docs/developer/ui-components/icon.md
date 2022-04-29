# Icon

Display an icon, EarnKeeper uses the [FeatherIcons](https://feathericons.com/) and [CoreUiIcons](https://icons.coreui.io/icons/) free sets.

## Supported Properties

| Name   | Type          | Description                                                                                                                       |
| ------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| name\* | string        | The icon show, should be either a [FeatherIcons](https://feathericons.com/) or [CoreUiIcons](https://icons.coreui.io/icons/) name |
| size?  | string \| Rpc | Icon size, one of `sm`, `lg`, `xl`, `xxl`, @dennis                                                                                |

## Examples

### TypeScript

```typescript
Icon({
  className: "filled-star",
  name: "star",
  size: "sm",
});
```
