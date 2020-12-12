import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./FoodBankLocations.css";

function FoodBankLocations(props) {
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
          <th>Hours</th>
          <th>Save Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id="name1">
          <a href={props.linkLocationOne} target="_blank" rel="noreferrer">{props.nameLocationOne}</a>
          </td>
          <td id="address1">{props.addressLocationOne}</td>
          <td id="city1">{props.cityLocationOne}</td>
          <td id="description1">{props.hoursLocationOne}</td>
          <td>
            <Button>Save</Button>
          </td>
        </tr>
        <tr>
        <td id="name2">
          <a href={props.linkLocationTwo} target="_blank" rel="noreferrer">{props.nameLocationTwo}</a>
          </td>
          <td id="address2">{props.addressLocationTwo}</td>
          <td id="city2">{props.cityLocationTwo}</td>
          <td id="description2">{props.hoursLocationTwo}</td>
          <td>
            <Button>Save</Button>
          </td>
        </tr>
        <tr>
        <td id="name3">
          <a href={props.linkLocationThree} target="_blank" rel="noreferrer">{props.nameLocationThree}</a>
          </td>
          <td id="address3">{props.addressLocationThree}</td>
          <td id="city3">{props.cityLocationThree}</td>
          <td id="description3">{props.hoursLocationThree}</td>
          <td>
            <Button>Save</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default FoodBankLocations;
