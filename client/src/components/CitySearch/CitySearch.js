import React from "react";
import Form from "react-bootstrap/Form";

function CitySearch() {
  return (
    <Form.Control
      size="sm"
      type="text"
      placeholder="Enter Zipcode"
      className="col-6 mx-auto"
      id="citySearch"
    />
  );
}

export default CitySearch;
