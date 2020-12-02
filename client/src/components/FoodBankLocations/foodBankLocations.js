import React from "react";
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button";
import "./foodBankLocations.css";

function FoodBankLocations() {
  return (

    <Table striped bordered hover variant="dark" className='foodBanks mx-auto'>
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
      <td>1) Name1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><Button>Save</Button></td>
    </tr>
    <tr>
      <td>2) Name2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td><Button>Save</Button></td>
    </tr>
    <tr>
      <td>3) Name3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td><Button>Save</Button></td>
    </tr>
  </tbody>
</Table>
  );
}

export default FoodBankLocations;
