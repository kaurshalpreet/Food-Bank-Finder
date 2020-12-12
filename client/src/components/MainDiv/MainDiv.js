import React from "react";
import "../NavBar/NavBar.css";
import NavBar from "../NavBar/NavBar";
import ContentDiv from "../ContentDiv/ContentDiv";

function MainDiv() {
  return (
    <div className="col-12 mx-auto" id="mainDiv">
      {/* <NavBar /> */}
      <ContentDiv />
    </div>
  );
}

export default MainDiv;
