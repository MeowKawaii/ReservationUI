import React, { Component, Fragment } from 'react';

import SimpleSelect from '../../component/SelectField';
import TextField from '../../component/TextField';
import Button from '../../component/Button';
import Grid from '@material-ui/core/Grid';
import './styles.css'

class SearchField extends Component {

  constructor(props){
    super(props);
    this.state = {
      data:[],
      title:'',
      text:""
    }

    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.handleTextFieldChange=this.handleTextFieldChange.bind(this);
    this.searchBooking = this.searchBooking.bind(this);
  }

  handleTextFieldChange(texts){
      this.setState({text:texts});
  }
  handleRoomChange(room) {
      this.setState({title:room});
  }

  searchBooking(){
    if(this.state.text==""){
        fetch(`http://localhost:8080/bookings/`, {
      method:'GET'
    })
      .then((response)=>response.json())
      .then((data)=>{
        this.setState({data:data});
        this.props.setDatas(this.state.data);
      });
    }
    else{
        fetch(`http://localhost:8080/bookings/searching?type=${this.state.title}&result=${this.state.text}`, {
      method:'GET'
    })
      .then((response)=>response.json())
      .then((data)=>{
        this.setState({data:data});
        this.props.setDatas(this.state.data);
      });
    }
  }

  render(){
    return (
      <Fragment>
        <Grid
            container
            direction="coloum"
            justify="center"
            alignItems="center"
        >
            <div className="search">
              <SimpleSelect handleRoomChange={this.handleRoomChange}/>
              <TextField handleTextFieldChange={this.handleTextFieldChange}/>
              <Button handle={this.searchBooking} text={"Search"} variant={"outlined"}/> 
              <Button handle={this.searchBooking} text={"Booking"} variant={"contained"}></Button>
            </div>
        </Grid>
      </Fragment>
      
    );
  }
}

export default SearchField;
