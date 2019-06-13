import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MyButton from "../../component/Button";
import { makeStyles } from "@material-ui/core/styles";

export default function AlertDialog({
  textTitle,
  textContent,
  open,
  showDialog,
  leftBtnFunc,
  rightBtnFunc,
  leftBtn,
  rightBtn,
  leftBtnText,
  rightBtnText,
}) {

  const useStyles = makeStyles(theme => ({
    title: {
      minWidth: 400,
    },
  }));

  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={showDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" className={classes.title}>{textTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {textContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {leftBtn && (
          <Button onClick={leftBtnFunc} color="primary" autoFocus>
            {leftBtnText}
          </Button>
        )}
        {rightBtn && (
          <Button onClick={rightBtnFunc} color="primary" autoFocus>
            {rightBtnText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
