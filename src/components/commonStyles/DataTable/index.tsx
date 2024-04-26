import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface Props {
  rowsProps: any;
  columnsProps: GridColDef[];
}

const DataTable = (props: Props) => {
  const { rowsProps, columnsProps } = props;
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rowsProps}
        columns={columnsProps}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 50, 100]}
        // checkboxSelection
        sx={{
          "& .MuiDataGrid-main": {
            "& .MuiDataGrid-topContainer": {
              "& .MuiDataGrid-columnHeaders": {
                "& .MuiDataGrid-columnHeaderTitle": {
                  fontWeight: 700,
                  fontSize: "16px",
                },
              },
              "& .MuiDataGrid-virtualScroller": {
                "& .MuiDataGrid-row": {
                  "& .MuiDataGrid-cell": {
                    "& .MuiInputBase-root": {
                      "& fieldset": {
                        border: "none",
                      },
                      "& .MuiSelect-select": {},
                    },
                  },
                },
              },
            },
            "& .MuiDataGrid-filler": {
              display: "none",
            },
          },
        }}
      />
    </div>
  );
};
export default DataTable;
