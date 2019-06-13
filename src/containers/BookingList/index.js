import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import EditIcon from "@material-ui/icons/EditRounded";
import DeleteIcon from "@material-ui/icons/DeleteRounded";
import AlertDialog from "../../component/Dialog";
import FormDialog from "../../component/FormDialog";

const comfirmTextTitle = "Are you sure?";
const comfirmTextContent = "Are you sure you want to cancel this booking?";
const deleteTextTitle = "Cancel Booking";

const useStyles = makeStyles(theme => ({
  root: {
    width: "70%",
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  icon: {
    cursor: "pointer",
  },
}));

export default function TableList({ datas, setDatas }) {
  const [id, setID] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openForm, setOpenForm] = React.useState();
  const [deleteTextContent, setDeleteTextContent] = React.useState("False");
  const [dataDialog, setDataDialog] = React.useState({
    id: "",
    room: "",
    name: "",
    start: "",
    end: "",
  });
  const classes = useStyles();

  const updateBooking = data => {
    fetch(`http://localhost:8080/bookings/`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => {
      res.json();
      handleOpenModel(false);
      fetch(`http://localhost:8080/bookings/`, {
        method: "GET",
      })
        .then(response => response.json())
        .then(data => {
          setDatas(data);
        });
    });
  };

  const deleteBooking = id => {
    fetch(`http://localhost:8080/bookings/${id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(data => {
        setDeleteTextContent(data.status);
        fetch(`http://localhost:8080/bookings/`, {
          method: "GET",
        })
          .then(response => response.json())
          .then(data => {
            setDatas(data);
          });
      });
  };

  const handleOpenModel = openModal => {
    setOpenForm(openModal);
  };

  const showDialog = openDialog => {
    setOpen(openDialog);
  };

  const showDeleteDialog = openDialog => {
    setOpenDelete(openDialog);
    if (openDialog == true) {
      deleteBooking(id);
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">Room</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Start Time</TableCell>
              <TableCell align="center">End Time</TableCell>
              <TableCell align="right" />
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map(data => (
              <TableRow key={data.id}>
                <TableCell align="center">{data.room}</TableCell>
                <TableCell align="center">{data.name}</TableCell>
                <TableCell align="center">{new Date(data.start).toLocaleDateString("th-TH")}, {new Date(data.start).toLocaleTimeString("th-TH")}</TableCell>
                <TableCell align="center">{new Date(data.end).toLocaleDateString("th-TH")}, {new Date(data.end).toLocaleTimeString("th-TH")}</TableCell>
                <TableCell
                  className={classes.icon}
                  align="right"
                  onClick={() => {
                    setDataDialog({ ...data });
                    handleOpenModel(true);
                  }}
                >
                  <EditIcon />
                </TableCell>
                <TableCell
                  className={classes.icon}
                  align="right"
                  onClick={() => {
                    showDialog(true);
                    setID(data.id);
                  }}
                >
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <AlertDialog
        textTitle={comfirmTextTitle}
        textContent={comfirmTextContent}
        open={open}
        showDialog={() => {
          showDialog(false);
        }}
        leftBtnFunc={() => {
          showDialog(false);
          showDeleteDialog(true);
        }}
        rightBtnFunc={() => {
          showDialog(false);
        }}
        leftBtn={true}
        rightBtn={true}
        leftBtnText={"Yes"}
        rightBtnText={"No"}
      />
      <AlertDialog
        textTitle={deleteTextTitle}
        textContent={deleteTextContent}
        open={openDelete}
        showDialog={() => {
          showDeleteDialog(false);
        }}
        rightBtnFunc={() => {
          showDeleteDialog(false);
        }}
        rightBtn={false}
      />
      <FormDialog
        disabled={true}
        openModal={openForm}
        handleCloseModal={() => handleOpenModel(false)}
        titleDialog="Edit Booking"
        textBtnRight="Edit"
        defaultID={dataDialog.id}
        defaultRoom={dataDialog.room}
        defaultName={dataDialog.name}
        defaultStartTime={dataDialog.start}
        defaultEndTime={dataDialog.end}
        handleRight={updateBooking}
      />
    </div>
  );
}
