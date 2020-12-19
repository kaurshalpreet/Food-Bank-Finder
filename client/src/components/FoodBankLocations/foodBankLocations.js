import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./FoodBankLocations.css";



class FoodBankLocations extends React.Component {
  constructor(props){
      super(props);
      this.state= {email:'', name:'', link:'', address:'', city:'', hours:''}
      this.savedLocationOne = this.savedLocationOne.bind(this);
      this.savedLocationTwo = this.savedLocationTwo.bind(this);
      this.savedLocationThree = this.savedLocationThree.bind(this);
      this.saveLocation = this.saveLocation.bind(this);


  }

 savedLocationOne(event){
    event.preventDefault();

    // this.setState({email: this.props.nameLocationOne});
    // this.setState({displayOne: "none"})
    this.setState({name: this.props.nameLocationOne});
    this.setState({link: this.props.linkLocationOne});
    this.setState({address: this.props.addressLocationOne});
    this.setState({city: this.props.cityLocationOne});
    this.setState({hours: this.props.hoursLocationOne},()=>
    {
    this.saveLocation(this.state.name, this.state.link, this.state.address, this.state.city, this.state.hours)
    }
    )
    }

  savedLocationTwo(event){
      event.preventDefault();
  
      // this.setState({email: this.props.nameLocationTwo});
      // this.setState({displayTwo: "none"})
      this.setState({name: this.props.nameLocationTwo});
      this.setState({link: this.props.linkLocationTwo});
      this.setState({address: this.props.addressLocationTwo});
      this.setState({city: this.props.cityLocationTwo});
      this.setState({hours: this.props.hoursLocationTwo},()=>
        {
      this.saveLocation(this.state.name, this.state.link, this.state.address, this.state.city, this.state.hours)
        })
      }


    savedLocationThree(event){
        event.preventDefault();
    
        // this.setState({email: this.props.nameLocationThree});
        // this.setState({displayThree: "none"})
        this.setState({name: this.props.nameLocationThree});
        this.setState({link: this.props.linkLocationThree});
        this.setState({address: this.props.addressLocationThree});
        this.setState({city: this.props.cityLocationThree});
        this.setState({hours: this.props.hoursLocationThree},()=>
      {
       this.saveLocation(this.state.name, this.state.link, this.state.address, this.state.city, this.state.hours)
      })
        }

    saveLocation(name, link, address, city, hours) {
      // console.log(email);
      console.log(city);
      axios.post("/user/savedLocations", {
        // email: email,
        name: name,
        link: link,
        address: address,
        city: city,
        hours: hours
      })
    .then((res) => {
      console.log(" saved location click")
    })
    .catch((err) => {
      console.log(err);
     
  });
    }

 render(props) {
  return (
    <Table style={{display:this.props.showfoodbank}}
      striped
      bordered
      hover
      variant="light"
      className="foodBanks mx-auto"
      id="foodBankLocations"
    >
      <thead>
        <tr>
          <th>Local Foodbanks</th>
          <th>Address</th>
          <th>City</th>
          <th>Hours</th>
          <th>Save Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id="name1">
          <a href={this.props.linkLocationOne} target="_blank" rel="noreferrer">{this.props.nameLocationOne}</a>
          </td>
          <td id="address1">{this.props.addressLocationOne}</td>
          <td id="city1">{this.props.cityLocationOne}</td>
          <td id="description1">{this.props.hoursLocationOne}</td>
          <td style={{ display: this.props.buttonOne }}>
            <Button onClick={this.savedLocationOne}>Save</Button>
          </td>
        </tr>
        <tr>
        <td id="name2">
          <a href={this.props.linkLocationTwo} target="_blank" rel="noreferrer">{this.props.nameLocationTwo}</a>
          </td>
          <td id="address2">{this.props.addressLocationTwo}</td>
          <td id="city2">{this.props.cityLocationTwo}</td>
          <td id="description2">{this.props.hoursLocationTwo}</td>
          <td style={{ display: this.props.buttonTwo }}>
            <Button onClick={this.savedLocationTwo}>Save</Button>
          </td>
        </tr>
        <tr>
        <td id="name3">
          <a href={this.props.linkLocationThree} target="_blank" rel="noreferrer">{this.props.nameLocationThree}</a>
          </td>
          <td id="address3">{this.props.addressLocationThree}</td>
          <td id="city3">{this.props.cityLocationThree}</td>
          <td id="description3">{this.props.hoursLocationThree}</td>
          <td style={{ display: this.props.buttonThree }}>
            <Button onClick={this.savedLocationThree}>Save</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
};

export default FoodBankLocations;
