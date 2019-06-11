import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 10,
    marginTop:9
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
    width:150
  },
  select:{
    textAlign:"center"
  }
}));

function SimpleSelect({handleRoomChange}) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    title: "room",
  });

  function handleChange(event) {
    setValues(oldValues => ({
      title: event.target.value,
    }));

    handleRoomChange(event.target.value);
  }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <Select
          className={classes.select}
          value={values.title}
          onChange={handleChange}
          inputProps={{
            name: 'title',
          }}
        >
          <MenuItem value={"room"}>Room</MenuItem>
          <MenuItem value={"name"}>Name</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}

export default SimpleSelect;
