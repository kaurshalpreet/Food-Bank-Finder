import React from "react";
import "../NavBar/NavBar.css";
import NavBar from "../NavBar/NavBar";
import CardContainer from "../Card/CardContainer";
import SavedLocations from "../SavedLocations/SavedLocations";
import { Component } from "react";
import axios from 'axios';

class MainDiv extends Component {
  constructor() {
    super()
    this.renderLocation = this.renderLocation.bind(this)
}

  renderLocation(event) {
    event.preventDefault()
    console.log('rendering data from MainDiv')
    axios.post('/user/renderSavedLocations').then(response => {
      console.log(response.data)
      // this.setState({name:response.data.name})
      // this.setState({link:response.data.link})
      // this.setState({city:response.data.city})
      // this.setState({address:response.data.address})
      // this.setState({hours:response.data.hours})
      // window.location.replace("/SavedLocations")
    })
    .catch(error => {
      console.log(error)
  })
  }

  render(){

  return (
    <div id="mainDiv">
      <NavBar renderLocationOne={this.renderLocation}/>
      <CardContainer />
      <SavedLocations />
    </div>
  )
  }
}

export default MainDiv;
