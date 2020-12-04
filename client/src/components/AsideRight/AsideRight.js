import React from "react";
import SavedDropdown from "../SavedDropdown/SavedDropdown";
//import "./AsideRight.css";

function AsideRight() {
  return (
    <div className="col-2 mx-right" id="asideRight">
      <SavedDropdown />
    </div>
  );
}

export default AsideRight;
