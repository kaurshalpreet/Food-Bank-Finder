import React from "react";
import axios from 'axios';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import NavBar from "../NavBar/NavBar";
import "./SavedLocations.css";



class SavedLocations extends React.Component {
    constructor(props){
        super(props);
        this.state = {table:""}
        this.callSavedLocations = this.callSavedLocations.bind(this);

    }

    callSavedLocations(props){
      console.log(this.props)
      // var len = this.props.data;
      // for (var i=0; i < len.length; i++){
      //    this.setState({table : `<tr>
      //    <td>
      //    <a href=${this.props.data.link[i]} target="_blank" rel="noreferrer">${this.props.data.name[i]}</a>
      //    </td>
      //    <td >${this.props.data.address[i]}</td>
      //    <td >${this.props.data.city[i]}</td>
      //    <td >${this.props.data.hours[i]}</td>
      //  </tr>`
      //    })
      // }
    }



    render(props){
        this.callSavedLocations(props);
       
        return(
            <div>

        <div id="about" className="col-12 mx-auto">
            <NavBar 
            />
        </div>
        <div  id="centerTable">

            <Table
            scope="row"
            striped
            bordered
            hover
            variant="light"
            className="foodBanks mx-auto important"
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
        
            <div value= {this.state.table}></div>

          {/* {this.callSavedLocations()} */}
        {/* <tr>
          <td id="name1">
          <a href={this.props.data.link} target="_blank" rel="noreferrer">{this.props.data.name}</a>
          </td>
          <td id="address1">{this.props.data.address}</td>
          <td id="city1">{this.props.data.city}</td>
          <td id="description1">{this.props.data.hours}</td>
        </tr> */}
        
        
        
      </tbody>
            </Table>
            </div>
             
{/* **********Add functionality to render the table here******************************* */}

{/* ********************************************************************************** */}
            </div>
   
    )}}


    export default SavedLocations;