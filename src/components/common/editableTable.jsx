import React from "react";
import { connect } from "react-redux";
import { Grid, Paper } from "@material-ui/core";
import {
  AddBox,
  Check,
  Clear,
  Create,
  DeleteForever,
  ChevronLeft,
  ChevronRight,
  FirstPage,
  LastPage
} from "@material-ui/icons";
import MaterialTable from "material-table";

import TableNamePanel from "./tableNamePanel";
import DropDownList from "./dropDownList";
import { dropDownListOperations } from "../../state/ducks/dropDownList";

import { ADD_ROW, EDIT_MODE, VIEW_MODE } from "../constants";
import { editableTableStyles as styles } from "../../styles/editableTableStyles";
import { generateButtonList } from "../utils";

const EditableTable = ({ displayMode, changeMode }) => {
  const [state, setState] = React.useState({
    columns: [
      {
        title: "Run Number",
        field: "runNumber",
        type: "numeric",
        cellStyle: styles.cellStyle
      },
      {
        title: "Interval FH",
        field: "intervalFH",
        type: "numeric",
        cellStyle: styles.cellStyle
      },
      {
        title: "Interval FC",
        field: "intervalFC",
        type: "numeric",
        cellStyle: styles.cellStyle
      },
      {
        title: "Interval Day",
        field: "intervalDay",
        type: "numeric",
        cellStyle: styles.cellStyle
      },
      {
        title: "SV Cost",
        field: "svCost",
        type: "numeric",
        cellStyle: styles.cellStyle
      },
      {
        title: "Cost Date",
        field: "costDate",
        type: "numeric",
        cellStyle: styles.cellStyle
      },
      {
        title: "SV Down Days",
        field: "svDownDays",
        type: "numeric",
        cellStyle: styles.cellStyle
      }
    ],
    data: [
      {
        runNumber: 0,
        intervalFH: "NA",
        intervalFC: "NA",
        intervalDay: 2920,
        svCost: 600000,
        costDate: "Jan-09-2020",
        svDownDays: 60
      },
      {
        runNumber: 1,
        intervalFH: "NA",
        intervalFC: "NA",
        intervalDay: 2920,
        svCost: 600000,
        costDate: "Jan-09-2020",
        svDownDays: 60
      },
      {
        runNumber: 2,
        intervalFH: "NA",
        intervalFC: "NA",
        intervalDay: 2920,
        svCost: 600000,
        costDate: "Jan-09-2020",
        svDownDays: 60
      }
    ]
  });

  const options = {
    search: false,
    sorting: false,
    draggable: false,
    actionsColumnIndex: -1,
    headerStyle: styles.header
  };

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

  const icons = {
    Add: AddBox,
    Clear: Clear,
    Check: Check,
    Delete: () => <DeleteForever color="secondary" />,
    Edit: Create,
    PreviousPage: ChevronLeft,
    NextPage: ChevronRight,
    FirstPage: FirstPage,
    LastPage: LastPage
  };

  const customComponents = {
    Toolbar: props => (
      <Paper elevation={0} style={styles.background}>
        <Grid container direction="column">
          <Paper elevation={0} style={styles.tableNamePanel}>
            <TableNamePanel
              label={props.title}
              buttons={[
                <DropDownList
                  onRowAdd={displayMode ? null : props.actions[0].onClick}
                  onModeChange={changeMode}
                  options={generateButtonList(
                    displayMode
                      ? [EDIT_MODE, VIEW_MODE]
                      : [ADD_ROW, EDIT_MODE, VIEW_MODE]
                  )}
                />
              ]}
            />
          </Paper>
        </Grid>
      </Paper>
    )
  };

  return (
    <MaterialTable
      style={styles.background}
      title="Shop Visit Assumptions"
      columns={state.columns}
      data={state.data}
      options={options}
      editable={displayMode ? null : editOptions}
      icons={icons}
      components={customComponents}
    />
  );
};

const mapStateToProps = state => {
  return {
    displayMode: state.dropDownList.displayMode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeMode: isDisplayMode =>
      dispatch(dropDownListOperations.changeMode(isDisplayMode))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditableTable);

// editable={displayMode ? null : editOptions}

// const renderAddButton = actions => {
//   return actions.length === 0 ? null : (
//     <Tooltip title="Add Row">
//       <IconButton aria-label="Add" onClick={actions[0].onClick}>
//         <AddBox />
//       </IconButton>
//     </Tooltip>
//   );
// };
