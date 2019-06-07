import React from 'react';
import SimpleSelect from './component/SelectField';
import TextField from './component/TextField';
import SimpleAppBar from './component/AppBar'
import './App.css';
import SearchButton from './component/Button';



function App() {
  return (

    <Grid>
      
    </Grid>
    <div className="App">
      <SimpleAppBar/>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <SimpleSelect/>
        <TextField/>
        <SearchButton/> 
      </Grid>
    </div>
  );
}

export default App;
