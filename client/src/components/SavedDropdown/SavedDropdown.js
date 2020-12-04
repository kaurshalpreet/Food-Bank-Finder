import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./style.css";

function SavedDropdown() {
  return (
    <Dropdown id="savedDropdown">
      <Dropdown.Toggle variant="info" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu id="dropdownMenu">
        <Dropdown.Item href="#/action-1" id="dropdownItem">
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" id="dropdownItem">
          Another action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" id="dropdownItem">
          Something else
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SavedDropdown;
