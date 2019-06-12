import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
}));

function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" color="primary" className={classes.button}>
        Search
        <SearchIcon className={classes.leftIcon} />
      </Button>
    </div>
  );
}

export default IconLabelButtons;
