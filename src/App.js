import React, { Component } from 'react';

import SimpleAppBar from './component/AppBar'
import SearchField from './containers/SearchField'
import TableList from './containers/BookingList'

import Grid from '@material-ui/core/Grid';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data:[]
    }

    this.setDatas = this.setDatas.bind(this);
  }

  setDatas(datas){
    this.setState({data:datas});
  }

  render(){
    return (
      <Grid
        container
        direction="coloum"
        justify="center"
        alignItems="center"
      >
        <SimpleAppBar/>
        <SearchField setDatas={this.setDatas}/>
        <TableList datas={this.state.data} setDatas={this.setDatas}/>
      </Grid>
    );
  }
}

export default App;
