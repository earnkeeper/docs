# Datatable

React datatable with sorting, expandable rows and pagination.

<https://react-data-table-component.netlify.app/>

## Example Usage

<https://earnkeeper.io/game/thetan-arena/market-buy>

## Supported Properties

| Name                | Type                                       | Description                                                                                                                                                          |
| ------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| busyWhen?           | boolean                                    | string                                                                                                                                                               | Rpc |     |
| columns\*           | DatatableColumn\[ ]                        | The list of column definitions to use for the table, see below for the specification                                                                                 |
| data\*              | any[ ]\| Rpc                               | The data to display in the table, as a reference to locally stored data, see the Data Specification section for more info                                            |
| defaultSortAsc?     | boolean                                    | Set this to false if you want the table data to be sorted in DESC order.                                                                                             |
| defaultSortFieldId? | string                                     | Sets the a column to be pre sorted and corresponds to the a column definition id.                                                                                    |
| defaultView?        | string \| { [string]: string }             | Show `table` or `grid` view to the user by default, optionally specify default view by [bootstrap breakpoint](https://getbootstrap.com/docs/5.0/layout/breakpoints/) |
| dense?              | boolean                                    | Compacts the row height. can be overridden via theming rows |
| filters?            | FilterSchemaDto[ ]                         | Shows a list of filters above the table                                                                                                                              |
| gridView?           | { tileWidth?: number[ ]; tile: UiElement } | Elements to render in datatabe when in gridview|
| highlightOnHover?   | boolean                                    | If rows are to be highlighted on hover|
| noTableHead?        | boolean                                    | Hides the the sort columns and titles (TableHead).   |
| onRowClicked?       | Rpc                                        | Callback to access the row, event on row click.      |
| pagination?         | boolean                                    | Enable pagination with defaults. by default the total record set will be sliced depending on the page, rows per page  |
| paginationPerPage?  | number                                     | The default rows per page to use when the table initially loads.                                                                                                     |
| pointerOnHover?     | boolean                                    |If rows show a point icon on hover   |
| showExport?         | boolean                                    | Optional show exports link                                                                                                                                           |
| showLastUpdated?    | boolean                                    | Show age for last update                                                                                                                                             |
| stripe?             | boolean                                    | Stripe/band color the odd rows|

### Datatable Column

| Name        | Type                | Description                                                                                             |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------------- |
| cell?       | UiElement           | Replace the column cell with a custom ui element, with the current row as context                       |
| center?     | boolean             | Optional center aligment                                                                                |
| compact?    | boolean             | Sets cell padding to 0 |
| format?     | string \| Rpc       | Applies formatting to the selector e.g. row => moment(row.timestamp).format('lll') without changing the actual selector value |
| grow?       | number              | `flex-grow` of the column. This is useful if you want a column to take up more width than its relatives |
| hide?       | string \| number    | Option to show or hide column                                                                           |
| id\*        | string              | Unique id for the column                                                                                |
| maxWidth?   | string              | Optional minimun column width                                                                           |
| minWidth?   | string              | Optional maximim column width                                                                           |     |
| reorder?    | boolean             | The name to be shown in the column header                                                               |
| right?      | boolean             | Right justify the column header and cell content                                                        |
| searchable? | boolean             | Toggle for searchability on column                                                                      |
| sortable?   | boolean             | Allow the user to sort by this column                                                                   |
| title?      | string              | Optional column title                                                                                   |
| value?      | Rpc\|string\|number | The value of this column, used in sorting, and display if `format` and `cell` are not specified         |
| width?      | number              | The width of the column in pixels                                                                       |
| wrap?       | boolean             | Optional toggle for text wrap                                                                           |

### FilterSchemaDto

| Name               | Type                         | Description                                                |
| ------------------ | ---------------------------- | ---------------------------------------------------------- |
| columnId?          | string                       | Optional column to apply filter on                         |
| defaults?          | boolean \| boolean[ ] \| Rpc | default filter values                                      |
| min?               | number \| Rpc                | Minimum values to filter from                              |
| max?               | number \| Rpc                | Maximum value to filter to                                 |
| allowCustomOption? | boolean                      | Optional toggle for custome options                        |
| options?           | FilterOption[ ] \| Rpc       | Options can be specified here                              |
| type               | string                       | TODO                                                       |
| imageMap?          | Record<string, string>       | Optional mag of images for the look and feel of the filter |
| elementMap?        | Record<string, UiElement>    | Optional element map                                       |

### DatatableView

| Name          | Type               | Description |
| ------------- | ------------------ | ----------- |
| DatatableView | string             | TODO        |

### Filter Options

| Name         | Type                                                   | Description |
| ------------ | ------------------------------------------------------ | ----------- |
| FilterOption | string \| Readonly<{ label: string; query?: string; }> |             |

## Examples

### TypeScript

```typescript
Datatable({
  data: `$.${RENTED_CRITTER_DOCUMENT}.*`,
  columns: [
    {
      id: "tokenId",
      sortable: true,
      value: "$.tokenId",
      cell: Link({
        content: "$.tokenId",
        href: formatTemplate(
          "https://etherscan.io/token/0x47f75e8dd28df8d6e7c39ccda47026b0dca99043?a={{ tokenId }}",
          {
            tokenId: "$.tokenId",
          }
        ),
        external: true,
      }),
    },
    {
      id: "expiresIn",
      sortable: true,
      value: "$.expiryDate",
      label: formatTimeToNow("$.expiryDate"),
    },
    {
      id: "expiryDate",
      sortable: true,
      value: "$.expiryDate",
      label: formatDatetime("$.expiryDate"),
    },
  ],
});
```
