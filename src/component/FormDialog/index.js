import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import DatejsUtils from "@date-io/dayjs";
export default function FormDialog({
  disabled = false,
  openModal,
  handleCloseModal,
  titleDialog = "Booking",
  textBtnRight = "Booking",
  defaultID = "",
  defaultRoom = "",
  defaultName = "",
  defaultStartTime = "",
  defaultEndTime = "",
  handleRight,
}) {
  const [values, setValues] = React.useState({});
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleChange = data => event => {
    setValues({ ...values, [data]: event.target.value });
  };

  const dataChange=(data)=>{
    handleDateChange(data);
    console.log(new Date(defaultEndTime))
  }

  const handleEdit = values => {
    if (values.id == null) {
      values.id = defaultID;
    }
    if (values.room == null) {
      values.room = defaultRoom;
    }
    if (values.name == null) {
      values.name = defaultName;
    }
    if (values.start == null) {
      values.start = defaultStartTime;
    }
    if (values.end == null) {
      values.end = defaultEndTime;
    }

    var temp = values;
    handleRight(temp);

    setValues({});
  };

  return (
    <Dialog open={openModal} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{titleDialog}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={6}>
              <TextField
                onChange={handleChange("room")}
                value={values.room}
                defaultValue={defaultRoom}
                autoFocus
                margin="dense"
                id="room"
                label="Room"
                type="text"
                fullWidth
                disabled={disabled}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={handleChange("name")}
                value={values.name}
                defaultValue={defaultName}
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                disabled={disabled}
              />
            </Grid>
            <Grid />
          </Grid>
          <Grid container item xs={12} spacing={2} />
          <Grid item xs={6}>
            <TextField
              onChange={handleChange("start")}
              value={values.start}
              defaultValue={defaultStartTime}
              margin="dense"
              id="start"
              label="Start Time"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              onChange={handleChange("end")}
              value={values.end}
              defaultValue={defaultEndTime}
              margin="dense"
              id="end"
              label="End Time"
              type="text"
              fullWidth
            />
            <MuiPickersUtilsProvider utils={DatejsUtils}>
              <KeyboardDateTimePicker
                value={selectedDate}
                // defaultValue={defaultEndTime}
                onChange={dataChange}
                label="Keyboard with error handler"
                onError={console.log}
                minDate={new Date()}
                format="DD/MM/YYYY hh:mm"
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleCloseModal(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={() => handleEdit(values)} color="primary">
          <Typography>{textBtnRight}</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
