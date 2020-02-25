import React from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import TableName from "./tableName";

const EditableTable = () => {
  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" },
      { title: "Birth Year", field: "birthYear", type: "numeric" },
      {
        title: "Birth Place",
        field: "birthCity",
        lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
      }
    ],
    data: [
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34
      }
    ]
  });
  const editOptions = {
    onRowAdd: newData =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve();
          setState(prevState => {
            const data = [...prevState.data];
            data.push(newData);
            return { ...prevState, data };
          });
        }, 600);
      }),
    onRowUpdate: (newData, oldData) =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve();
          if (oldData) {
            setState(prevState => {
              const data = [...prevState.data];
              data[data.indexOf(oldData)] = newData;
              return { ...prevState, data };
            });
          }
        }, 600);
      }),
    onRowDelete: oldData =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve();
          setState(prevState => {
            const data = [...prevState.data];
            data.splice(data.indexOf(oldData), 1);
            return { ...prevState, data };
          });
        }, 600);
      })
  };
  const displayMode = false;
  return (
    <MaterialTable
      style={{ backgroundColor: "#f6f6f6" }}
      title={<TableName subtitle="Shop Visit Assumptions" hideButton={true} />}
      headerStyle={{ backgroundColor: "rgba(0,0,0,0.08)" }}
      columns={state.columns}
      data={state.data}
      options={{ search: false, actionsColumnIndex: -1 }}
      editable={displayMode ? null : editOptions}
      icons={{
        Add: MoreVertIcon,
        PreviousPage: ChevronLeftIcon,
        NextPage: ChevronRightIcon,
        FirstPage: FirstPageIcon,
        LastPage: LastPageIcon
      }}
    />
  );
};

export default EditableTable;
