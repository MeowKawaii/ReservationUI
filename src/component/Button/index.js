import React from "react";
import Btn from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  button: {
    margin: 10,
    paddingRight: 10,
    paddingLeft: 8,
    minWidth: 100,
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
}));

function Button({ handle, text, variant }) {
  const classes = useStyles();

  return (
    <Btn
      variant={variant}
      color="primary"
      className={classes.button}
      onClick={handle}
    >
      {/* <SearchIcon className={classes.leftIcon} color="primary"/> */}
      {text}
    </Btn>
  );
}

export default Button;
