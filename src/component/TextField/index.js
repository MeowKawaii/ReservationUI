import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { textAlign } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow:1,
    minWidth:120
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    flexGrow:1,
  }
}));

function TextFields({handleTextFieldChange}) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
  });

  const handleChange = data=>event => {
    setValues({data: event.target.value});
    handleTextFieldChange(event.target.value);
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-textField"
        className={classes.textField}
        value={values.name}
        margin="normal"
        onChange={handleChange('name')}
      />
    </form>
  );
}

export default TextFields;
