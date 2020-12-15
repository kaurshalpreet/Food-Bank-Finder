import React from "react";
import axios from 'axios';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import NavBar from "../NavBar/NavBar";
import "./SavedLocations.css";



class SavedLocations extends React.Component {
    constructor(props){
        super(props);
        this.callSavedLocations = this.callSavedLocations.bind(this);
    }

    callSavedLocations(props){

      // for (var i=0; i < this.props.name.length; i++){
      //    const table = `<tr>
      //    <td>
      //    <a href=${this.props.link[i]} target="_blank" rel="noreferrer">${this.props.name[i]}</a>
      //    </td>
      //    <td >${this.props.address[i]}</td>
      //    <td >${this.props.city[i]}</td>
      //    <td >${this.props.hours[i]}</td>
      //  </tr>`

      // }
    }


    render(props){
      

        return(
            <div>

        <div id="about" className="col-12 mx-auto">
            <NavBar />
        </div>

            <Table
            striped
            bordered
            hover
            variant="dark"
            className="foodBanks mx-auto"
            id="foodBankLocations"
          >
            <thead>
              <tr>
                <th>Local Foodbanks</th>
                <th>Address</th>
                <th>City</th>
                <th>Hours</th>
              </tr>
            </thead>
            <tbody>
        
          {this.callSavedLocations()}
        {/* <tr>
          <td id="name1">
          <a href={this.props.link} target="_blank" rel="noreferrer">{this.props.name}</a>
          </td>
          <td id="address1">{this.props.address}</td>
          <td id="city1">{this.props.city}</td>
          <td id="description1">{this.props.hours}</td>
        </tr> */}
        
        
        
      </tbody>
            </Table>
             
{/* **********Add functionality to render the table here******************************* */}

{/* ********************************************************************************** */}
            </div>
   
    )}}


    export default SavedLocations;