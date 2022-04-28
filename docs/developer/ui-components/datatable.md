# Datatable

React datatable with sorting, expandable rows and pagination.

<https://react-data-table-component.netlify.app/>

## Supported Properties

EarnKeeper does not support all properties of the underlying control, the currently supported properties are below.

| Name               | Type               | Description                                                                                                               |
| ------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| busyWhen?            | Boolean | string | Rpc |                                      |
| columns\*            | DatatableColumn\[]      | The list of column definitions to use for the table, see below for the specification                                      |
| data\*               | any[]\| Rpc            | The data to display in the table, as a reference to locally stored data, see the Data Specification section for more info |
| defaultSortAsc?      | boolean                 | Set this to false if you want the table data to be sorted in DESC order.                                                  |
| defaultSortFieldId?  | string                  | Sets the a column to be pre sorted and corresponds to the a column definition id.                                         |
| defaultView?         | DatatableView \|Readonly<{ xs?: DatatableView; sm?: DatatableView; md?: DatatableView; lg?: DatatableView; xl?: DatatableView; xxl?: DatatableView;}> |           |
| dense?               | Boolean     |                                                    |
| filters?             | FilterSchemaDto[]      | Shows a list of filters above the table                                                                                     |
| gridView?            | { tileWidth?: number[]; tile: UiElement }     |                                                                                         |
| highlightOnHover?    | Boolean    |                                                  |
| noTableHead?         | Boolean    |                                                  |
| onRowClicked?        | Rpc        |                                                  |
| pagination?           | Boolean                 | Enable pagination with defaults.                                                                                          |
| paginationPerPage?  | number                  | The default rows per page to use when the table initially loads.                                                          |
| pointerOnHover?     | Boolean                    |                                                  |
| showExport?         | Boolean                    |                                                  |
| showLastUpdated?    | Boolean                    |                                                  |
| stripe?             | Boolean                    |                                                  |

### DatatableColumn

| Name       | Type                | Description                                                                                             |
| ---------- | ------------------- | ------------------------------------------------------------------------------------------------------- |
| cell?        | UiElement           | Replace the column cell with a custom ui element, with the current row as context                       |
| center?       | Boolean           |      |
| compact?      | Boolean           |      |
| format?       | string | Rpc      |      |
| grow?         | number            | `flex-grow` of the column. This is useful if you want a column to take up more width than its relatives      |
| hide?         | string | number   |      |
| id\*          | string            | Unique id for the column|
| maxWidth?     | string            |      |
| minWidth?     | string            |      |                                                         |
| reorder?      | boolean           | The name to be shown in the column header                                                               |
| right?      | boolean             | Right justify the column header and cell content                                                        |
| searchable?   | boolean             |  |
| sortable?   | boolean             | Allow the user to sort by this column                                                                   |
| title?     | string            |      |   
| value?    | Rpc\|string\|number | The value of this column, used in sorting, and display if `format` and `cell` are not specified         |
| width?     | number              | The width of the column in pixels                                                                       |
| wrap?     | boolean              |  |

### FilterSchemaDto

| Name                 | Type                      |Description                                     |
| -------------------- | ------------------------- | ---------------------------------------------- |
| columnId?            | string                    |                                                |
| defaults?            | boolean | boolean[] | Rpc |                                                |
| min?                 | number | Rpc              |                                                |
| max?                 | number | Rpc              |                                                |
| allowCustomOption?   | boolean                   |                                                |
| options?             | FilterOption[] | Rpc      |                                                |
| type                 | string                    |                                                |
| imageMap?            | Record<string, string>    |                                                |
| elementMap?          | Record<string, UiElement> |                                                |

### DatatableView

| Name                 | Type                      |Description                                     |
| -------------------- | ------------------------- | ---------------------------------------------- |
| DatatableView        | 'grid' | 'column'         |                                                |

### Filter Options
| Name                 | Type                                                    |Description                                     |
| -------------------- | ------------------------------------------------------- | ---------------------------------------------- |
| FilterOption         | | string| Readonly<{ label: string; query?: string; }>  |                                                |
## Examples

### JSON

```json
{
  "_type": "Datatable",
  "props": {
    "data": "$.rentedCritterzDocuments.*",
    "columns": [
      {
        "id": "tokenId",
        "sortable": true,
        "value": "$.tokenId",
        "cell": {
          "_type": "Link",
          "props": {
            "content": {
              "method": "template",
              "params": [
                "https://etherscan.io/token/0x47f75e8dd28df8d6e7c39ccda47026b0dca99043?a={{ tokenId }}",
                {
                  "tokenId": "$.tokenId"
                }
              ]
            }
          }
        }
      },
      {
        "id": "expiresIn",
        "sortable": true,
        "value": "$.expiryDate",
        "format": {
          "method": "formatTimeToNow",
          "params": ["$.expiryDate"]
        }
      },
      {
        "id": "expiryDate",
        "sortable": true,
        "value": "$.expiryDate",
        "format": {
          "method": "formatDatetime",
          "params": ["$.expiryDate"]
        }
      }
    ]
  }
}
```

### TypeScript

```javascript
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
