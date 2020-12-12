import React from "react";
import AsideLeft from "../AsideLeft/AsideLeft";
import CenterDiv from "../CenterDiv/CenterDiv";
import AsideRight from "../AsideRight/AsideRight";
import "./ContentDiv.css";

function ContentDiv() {
  return (
    <div id="contentDiv">
      <AsideLeft />
      <CenterDiv />
      <AsideRight />
    </div>
  );
}

export default ContentDiv;
