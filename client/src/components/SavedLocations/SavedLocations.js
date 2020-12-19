import React from "react";
import Table from "react-bootstrap/Table";
import NavBar from "../NavBar/NavBar";
import "./SavedLocations.css";

class SavedLocations extends React.Component {
  constructor(props) {
    super(props);
    this.renderTable = this.renderTable.bind(this);
  }

  renderTable(props) {
    var location = [];
    var len = this.props.name.length;
    console.log("length of array is" + len);
    var LocationObject = {
      name: "",
      address: "",
      city: "",
      hours: "",
      link: "",
    };
    for (var i = 0; i < len; i++) {
      LocationObject = {
        name: this.props.name[i],
        address: this.props.address[i],
        city: this.props.city[i],
        hours: this.props.hours[i],
        link: this.props.link[i],
      };
      location.push(LocationObject);
    }

    console.log(location);

    return location.map((location, index) => {
      const { name, link, address, hours, city } = location; //destructuring
      return (
        <tr>
          <td>
            <a href={link} target="_blank" rel="noreferrer">
              {name}
            </a>
          </td>
          <td>{address}</td>
          <td>{city}</td>
          <td>{hours}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div style={{display:this.props.showlocation}}>
        <div id="about" className="col-12 mx-auto">
          <NavBar />
        </div>
        <div >
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
            <tbody>{this.renderTable()}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default SavedLocations;
