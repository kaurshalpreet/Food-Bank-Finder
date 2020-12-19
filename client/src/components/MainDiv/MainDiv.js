import React from "react";
import "../NavBar/NavBar.css";
import NavBar from "../NavBar/NavBar";
import CardContainer from "../Card/CardContainer";
import  {Component}  from "react";



class MainDiv extends Component {
 
  render(){

  return (
    <div id="mainDiv">
      <NavBar />
      <CardContainer />
    </div>
  )
  }
}

export default MainDiv;
