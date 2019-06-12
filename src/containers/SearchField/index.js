import React, { Component, Fragment } from 'react';

import SimpleSelect from '../../component/SelectField';
import TextField from '../../component/TextField';
import Button from '../../component/Button';
import Grid from '@material-ui/core/Grid';
import './styles.css'
import MyModal from '../../component/Modal';
import MyFormDialog from '../../component/FormDialog' 

class SearchField extends Component {

  constructor(props){
    super(props);
    this.state = {
      data:[],
      title:'',
      text:"",
      open:false,
    }

    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.handleTextFieldChange=this.handleTextFieldChange.bind(this);
    this.handleOpenModel=this.handleOpenModel.bind(this);
    this.searchBooking = this.searchBooking.bind(this);
    this.bookingRoom = this.bookingRoom.bind(this);
  }

  handleTextFieldChange(texts){
      this.setState({text:texts});
  }
  handleRoomChange(room) {
      this.setState({title:room});
  }
  
  handleOpenModel(openModal) {
    this.setState({open:openModal});
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

  bookingRoom(data){
    fetch(`http://localhost:8080/bookings/`,{
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then((response)=>{response.json();this.setState({open:false});});
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
              <Button handle={this.handleOpenModel} text={"Booking"} variant={"contained"}></Button>
            </div>
        </Grid>
        <MyFormDialog openModal={this.state.open} handleCloseModal={this.handleOpenModel} handleRight={this.bookingRoom}/>
      </Fragment>
    );
  }
}

export default SearchField;
