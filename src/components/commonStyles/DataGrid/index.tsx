import { AdditionalFormikProps } from "@/interfaces/common";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  DataGrid as DataGridMui,
  GridActionsCellItem,
  GridColDef,
  GridEventListener,
  GridRowEditStopReasons,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  GridSlots,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import * as React from "react";
import { useTranslation } from "react-i18next";

interface Props extends AdditionalFormikProps {
  columnsProps: GridColDef[];

  fieldCreateFocus: string;

  newRow?: any;
}

interface EditToolbarProps extends Props {
  setFieldValue: (name: string, value: any) => void;
  setRowModesModel: (newModel: (oldModel: GridRowModesModel) => GridRowModesModel) => void;
  name: string;
  value: any;
}

function EditToolbar(props: EditToolbarProps) {
  const { setFieldValue, setRowModesModel, fieldCreateFocus, newRow, name, value } = props;
  const { t } = useTranslation();

  const handleClick = () => {
    const id = randomId();
    setFieldValue(name, [...value, { id, ...newRow }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: fieldCreateFocus },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        {t("shared:add")}
      </Button>
    </GridToolbarContainer>
  );
}

export default function DataGrid(props: Props) {
  const { columnsProps, form, field } = props;
  const { name, value } = field;
  const { setFieldValue } = form;

  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

  const { t } = useTranslation();

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setFieldValue(
      name,
      value.filter((row: any) => row.id !== id)
    );
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = value.find((row: any) => row.id === id);
    if (editedRow!.isNew) {
      setFieldValue(
        name,
        value.filter((row: any) => row.id !== id)
      );
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow };
    setFieldValue(
      name,
      value.map((row: any) => (row.id === newRow.id ? updatedRow : row))
    );
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    ...columnsProps,
    {
      field: "actions",
      headerName: t("shared:action"),
      type: "actions",
      width: 150,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem icon={<CancelIcon />} label="Cancel" className="textPrimary" onClick={handleCancelClick(id)} color="inherit" />,
          ];
        }

        return [
          <GridActionsCellItem icon={<EditIcon />} label="Edit" className="textPrimary" onClick={handleEditClick(id)} color="inherit" />,
          <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={handleDeleteClick(id)} color="inherit" />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        // height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGridMui
        rows={value}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar as GridSlots["toolbar"],
        }}
        slotProps={{
          toolbar: { setFieldValue, setRowModesModel, name, value },
        }}
        showCellVerticalBorder={true}
        showColumnVerticalBorder={true}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 50, 100]}
        // checkboxSelection
        hideFooterSelectedRowCount
        sx={{
          "& .MuiDataGrid-main": {
            overflow: "unset",
            borderTop: "1px solid rgba(224, 224, 224, 1)",

            "& .MuiDataGrid-topContainer": {
              "& .MuiDataGrid-columnHeaders": {
                background: "#f7f7f7",
                borderRadius: "8px",
                "& .MuiDataGrid-columnHeaderTitle": {
                  fontWeight: 700,
                  fontSize: "16px",
                },
              },
              "& .MuiDataGrid-virtualScroller": {
                "& .MuiDataGrid-row": {
                  "& .MuiDataGrid-cell": {
                    borderRadius: "0",
                    "& .MuiInputBase-root": {
                      borderRadius: "0",
                      "& fieldset": {
                        border: "none",
                      },
                      "& .MuiSelect-select": {
                        border: "none",
                      },
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
    </Box>
  );
}
