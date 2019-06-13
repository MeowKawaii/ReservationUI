import React, { Component } from "react";

import SimpleAppBar from "./component/AppBar";
import SearchField from "./containers/SearchField";
import TableList from "./containers/BookingList";

import Grid from "@material-ui/core/Grid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      type: "",
      search: "",
    };

    this.setDatas = this.setDatas.bind(this);
    this.setSearch = this.setSearch.bind(this);
  }

  setDatas(datas) {
    this.setState({ data: datas });
    console.log(datas);
  }

  setSearch(type, search) {
    this.setState({ type: type, search: search });
  }

  // componentDidUpdate() {
  //   if (this.state.search === "") {
  //     fetch(`http://localhost:8080/bookings/`, {
  //       method: "GET",
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         this.setDatas({ data });
  //       });
  //   }
    // else{
    //     fetch(`http://localhost:8080/bookings/searching?type=${this.state.type}&result=${this.state.serach}`, {
    //   method:'GET'
    // })
    //   .then((response)=>response.json())
    //   .then((data)=>{
    //     this.setDatas({data:data});
    //   });
    // }
  // }

  render() {
    return (
      <Grid container direction="coloum" justify="center" alignItems="center">
        <SimpleAppBar />
        <SearchField setDatas={this.setDatas} setSearch={this.setSearch} />
        <TableList datas={this.state.data} setDatas={this.setDatas} />
      </Grid>
    );
  }
}

export default App;
