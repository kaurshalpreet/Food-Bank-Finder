import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./foodBankLocations.css";

function FoodBankLocations() {
  return (
    <Table
      striped
      bordered
      hover
      variant="light"
      className="foodBanks mx-auto"
      id="foodBankLocations"
    >
      <thead>
        <tr>
          <th>Found Local Foodbanks</th>
          <th>Address</th>
          <th>City</th>
          <th>Description</th>
          <th>Save Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1) Example</td>
          <td id="address1">Example</td>
          <td id="city1">Example</td>
          <td id="description1">Example</td>
          <td>
            <Button>Save</Button>
          </td>
        </tr>
        <tr>
          <td>2) Name2</td>
          <td id="address2">Example</td>
          <td id="city2">Example</td>
          <td id="description2">Example</td>
          <td>
            <Button>Save</Button>
          </td>
        </tr>
        <tr>
          <td>3) Name3</td>
          <td id="address3">Example</td>
          <td id="city3">Example</td>
          <td id="description3">Example</td>
          <td>
            <Button>Save</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default FoodBankLocations;
