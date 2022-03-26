# Datatable

React datatable with sorting, expandable rows and pagination.

<https://react-data-table-component.netlify.app/>

## Supported Properties

EarnKeeper does not support all properties of the underlying control, the currently supported properties are below.

| Name               | Type               | Description                                                                                                               |
| ------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| columns\*          | DatatableColumn\[] | The list of column definitions to use for the table, see below for the specification                                      |
| data\*             | Rpc\|any[]         | The data to display in the table, as a reference to locally stored data, see the Data Specification section for more info |
| defaultSortAsc     | boolean            | Set this to false if you want the table data to be sorted in DESC order.                                                  |
| defaultSortFieldId | string             | Sets the a column to be pre sorted and corresponds to the a column definition id.                                         |
| filterable         | boolean            | Shows a list of filters above the table                                                                                   |
| pagination         | boolean            | Enable pagination with defaults.                                                                                          |
| paginationPerPage  | number             | The default rows per page to use when the table initially loads.                                                          |
| onRowClicked       | Rpc                | Rpc to run when a row is clicked                                                                                          |

### DatatableColumn

| Name       | Type                | Description                                                                                             |
| ---------- | ------------------- | ------------------------------------------------------------------------------------------------------- |
| id\*       | string              | Unique id for the column                                                                                |
| cell       | UiElement           | Replace the column cell with a custom ui element, with the current row as context                       |
| filterable | boolean             | Add the column to the list of available filters                                                         |
| grow       | number              | `flex-grow` of the column. This is useful if you want a column to take up more width than its relatives |
| format     | Rpc                 | An Rpc to format the column value for display                                                           |
| name       | string              | The name to be shown in the column header                                                               |
| right      | boolean             | Right justify the column header and cell content                                                        |
| sortable   | boolean             | Allow the user to sort by this column                                                                   |
| value\*    | Rpc\|string\|number | The value of this column, used in sorting, and display if `format` and `cell` are not specified         |
| width      | number              | The width of the column in pixels                                                                       |

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
