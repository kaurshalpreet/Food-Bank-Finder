import React from "react";
import "./SignUp.css";
import axios from 'axios'


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state= {firstNameInput:'', lastNameInput:'', emailInput:'',passwordInput:''}
        this.signupFormSubmit = this.signupFormSubmit.bind(this);
        this.fNameChange = this.fNameChange.bind(this);
        this.lNameChange = this.lNameChange.bind(this);
        this.emailchange = this.emailchange.bind(this);
        this.passwordchange = this.passwordchange.bind(this);
        this.handleLoginErr = this.handleLoginErr.bind(this);
    }

    fNameChange(event) {
        this.setState({firstNameInput:event.target.value});
        console.log(this.state.firstNameInput)
    }

    lNameChange(event) {
        this.setState({lastNameInput:event.target.value});
        console.log(this.state.lastNameInput)
    }

    emailchange(event){
        console.log(this.state.emailInput)
    this.setState({emailInput:event.target.value});
    console.log(this.state.emailInput)
    }
    
    passwordchange(event){
        this.setState({passwordInput:event.target.value});
        console.log(this.state.passwordInput);
    }

    signupFormSubmit(event) {
        event.preventDefault();
        var userData = {
          firstName: this.state.firstNameInput,
          lastName: this.state.lastNameInput,
          email: this.state.emailInput,
          password: this.state.passwordInput
        };
         
        this.signUpUser(userData.firstName, userData.lastName, userData.email, userData.password);
        this.setState({firstNameInput:""});
        this.setState({lastNameInput:""});
        this.setState({emailInput:""});
        this.setState({passwordInput:""});
    }
    //   if (!userData.email || !userData.password || !userData.firstName) {
    //     return;
    //   }
   
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    signUpUser(firstName, lastName, email, password) {

      axios.post("/user/", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
        })
        .then(()=> {
          window.location.replace("/members");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(this.handleLoginErr);
    }
  
    handleLoginErr(err) {
        alert(err.responseJSON);
    //   $("#alert .msg").text(err.responseJSON);
    //   $("#alert").fadeIn(500);
    }
  


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




render() {
    return (
<div className="container">
<div className="text-center">
    <form className="form-signup" onSubmit={this.signupFormSubmit}>
    <h1 className="h3 mb-3 font-weight-normal"> FOOD BANK FINDER </h1>
    <img className="mb-4" src="find-foodbank.jpg" alt="" width="150" height="150" />
    
  <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
  <label for="inputFirstName" className="sr-only">First name</label>
  <input type="firstName" value={this.state.firstNameInput} onChange={this.fNameChange} id="inputFirstName" className="form-control" placeholder="First name" required autofocus />
  <label for="inputLastName" className="sr-only">Last name</label>
  <input type="lastName" value={this.state.lastNameInput} onChange={this.lNameChange} id="inputLastName" className="form-control" placeholder="Last name" required autofocus />
  <label for="inputEmail" className="sr-only">Email address</label>
  <input type="email" value={this.state.emailInput} onChange={this.emailchange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
  <label for="inputPassword" className="sr-only">Password</label>
  <input type="password" value={this.state.passwordInput} onChange={this.passwordchange} id="inputPassword" className="form-control" placeholder="Password" required />
  <div className="checkbox mb-3">
  </div>
  <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
  <p className="mt-5 mb-3 text-light">&copy; 2020</p>
  <br />
<p id="signUpHere">Or Sign In <a href="/">here</a></p>
</form>
</div>
</div>

)};

    }

export default SignUp;