import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: "60%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none",
  },
}));

function MyModal({ openModal, handleCloseModal }) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={openModal}
    >
      <div style={modalStyle} className={classes.paper}>
        <Typography variant="h6" id="modal-title">
          Booking
        </Typography>
        <Typography variant="subtitle1" id="simple-modal-description" />
        <Button onClick={() => handleCloseModal(false)}>close</Button>
        <Button onClick={() => handleCloseModal(false)}>close</Button>
      </div>
    </Modal>
  );
}

export default MyModal;
