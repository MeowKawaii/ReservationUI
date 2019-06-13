import React,{useState,useEffect} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";

export default function FormDialog({
  disabled = false,
  openModal,
  handleCloseModal,
  titleDialog = "Booking",
  textBtnRight = "Booking",
  defaultID="a",
  defaultRoom = "a",
  defaultName = "a",
  defaultStartTime = "a",
  defaultEndTime = "a",
  handleRight,
}) {
  const [values, setValues] = React.useState({
    id:defaultID,
    room: defaultRoom,
    name: defaultName,
    start: defaultStartTime,
    end: defaultEndTime,
  });

  const handleChange = data => event => {
    setValues({  ...values, [data]: event.target.value });
  };

  useEffect(() => { setValues({id:defaultID,
    room: defaultRoom,
    name: defaultName,
    start: defaultStartTime,
    end: defaultEndTime}) });

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
                autoFocus
                margin="dense"
                id="room"
                label="Room"
                type="text"
                fullWidth
                disabled={disabled}
              />
              {values.name}{defaultName}
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={handleChange("name")}
                value={values.name}
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
              margin="dense"
              id="end"
              label="End Time"
              type="text"
              fullWidth
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleCloseModal(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={() => handleRight(values)} color="primary">
          <Typography>{textBtnRight}</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
}
