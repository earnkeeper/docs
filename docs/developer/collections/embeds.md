# Embeds

This special collection allows plugins to create slices of UI that can be embedded strategically in the EarnKeeper front end to promote the plugin's features.

For example an embed is placed below plugins on the home page and in the tool market to display key numbers to users to encourage them to dive deeper.

## Data Structure

### Collection name.

`embeds`

### Fields

| name    | type      | description                                                                                                                              |
| ------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| id      | string    | A unique id for the embed, sending embeds to the client with the same id will overwrite any previous embeds                              |
| element | UiElement | The root UI element for the embed, be aware that embeds come in different sizes, so your element should be created with the size in mind |
| size    | string    | Available options: `tile`                                                                                                                |

### Embed Sizes

`tile`

This embed size is used for embedding UI in the bottom portion of tiles on the home page and the tool market.

Here is an example:

It should be created with an aspect ratio of `4:1` with a max height of `200px`.
