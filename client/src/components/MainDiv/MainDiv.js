import React from "react";
import "../NavBar/NavBar.css";
import AsideLeft from "../AsideLeft/AsideLeft";
import AsideRight from "../AsideRight/AsideRight";
import CenterDiv from "../CenterDiv/CenterDiv";
import NavBar from "../NavBar/NavBar";

function MainDiv() {
  return (
    <div className="col-12 mx-auto" id="mainDiv">
      <NavBar />
      <AsideLeft />
      <CenterDiv />
      <AsideRight />
    </div>
  );
}

export default MainDiv;
