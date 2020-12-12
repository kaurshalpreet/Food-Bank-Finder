import React from "react";
import "../NavBar/NavBar.css";
import NavBar from "../NavBar/NavBar";
import CardContainer from "../Card/CardContainer";

function MainDiv() {
  return (
    <div id="mainDiv">
      <NavBar />
      <CardContainer />
    </div>
  );
}

export default MainDiv;
