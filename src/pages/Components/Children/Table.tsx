import { CommonStyles } from "@/components/commonStyles";
import DataTable from "@/components/commonStyles/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { Formik, Form, Field, FastField } from "formik";

const Table = () => {
  return (
    <div>
      <Formik initialValues={{ dataGrid: rows }} onSubmit={() => {}}>
        {(props) => {
          // console.log(props.values, "312312");

          return (
            <Form>
              <DataTable columnsProps={columnsTable} rowsProps={rowsTable} />
              <div className="" style={{ marginTop: "50px" }}>
                <FastField
                  component={CommonStyles.DataGrid}
                  columnsProps={columns}
                  rowsProps={rows}
                  fieldCreateFocus={"name"}
                  {...props.getFieldProps("dataGrid")}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Table;

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 200, editable: true },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 80,
    align: "left",
    headerAlign: "left",
    editable: true,
  },
  {
    field: "role",
    headerName: "Department",
    width: 220,
    editable: true,
    type: "singleSelect",
    valueOptions: ["Market", "Finance", "Development"],
  },
];
const rows = [
  { id: 1, name: "quang", age: 26, role: "Development" },
  { id: 2, name: "trang", age: 26, role: "Finance" },
  { id: 3, name: "huy", age: 26, role: "Market" },
  { id: 4, name: "long", age: 26, role: "Market" },
  { id: 5, name: "hoang", age: 26, role: "Market" },
  { id: 6, name: "viet", age: 26, role: "Market" },
  { id: 7, name: "lieu", age: 26, role: "Market" },
  { id: 8, name: "ly", age: 26, role: "Market" },
  { id: 9, name: "be", age: 26, role: "Market" },
  { id: 10, name: "bong", age: 26, role: "Market" },
  { id: 11, name: "chi", age: 26, role: "Market" },
  { id: 12, name: "huy", age: 26, role: "Market" },
];

const columnsTable: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "firstName", headerName: "First name", flex: 1 },
  { field: "lastName", headerName: "Last name", flex: 1 },
  {
    field: "age",
    headerName: "Age",
    flex: 1,
  },
];

const rowsTable = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 1 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 1 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 1 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 1 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 1 },
  { id: 6, lastName: "Melisandre", firstName: "jonh", age: 1 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 1 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 1 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 1 },
  { id: 10, lastName: "Roxie", firstName: "Harvey", age: 1 },
  { id: 11, lastName: "Roxie", firstName: "Harvey", age: 1 },
  { id: 12, lastName: "Roxie", firstName: "Harvey", age: 1 },
];
