import React from "react";
import "./SignIn.css";
import axios from 'axios'



class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state= {emailInput:'',passwordInput:'', showmodal:'none'}
        this.loginFormSubmit = this.loginFormSubmit.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.emailchange = this.emailchange.bind(this);
        this.passwordchange = this.passwordchange.bind(this);
        this.spanclick = this.spanclick.bind(this);
    }

emailchange(event){
this.setState({emailInput:event.target.value});
}

passwordchange(event){
    this.setState({passwordInput:event.target.value});
    }

  // When the form is submitted, we validate there's an email and password entered
  loginFormSubmit(event) {
    event.preventDefault();
    var userData = {
      email: this.state.emailInput,
      password: this.state.passwordInput
    };

    // if (!userData.email || !userData.password) {
    //   return;
    // }

    // If we have an email and password we run the loginUser function and clear the form
    this.loginUser(userData.email, userData.password);
    this.setState({emailInput:""});
    this.setState({passwordInput:""});
  }

    spanclick(event){
    this.setState({showmodal:"none"});
    }

//   loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  loginUser(email, password) {

        axios.post("/user/login", {
          email: email,
          password: password
        })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, log the error
      })
      .catch((err) => {
        console.log(err);
        console.log("no user available")
        this.setState({showmodal:"block"})
    });

}



render() {
    return (

<div className="container">

<div className="text-center">
    <form className="form-signin" onSubmit={this.loginFormSubmit}>
      <h1 className="h3 mb-3 font-weight-normal"> FOOD BANK FINDER </h1>
  <img className="mb-4" src="find-foodbank.jpg" alt="" width="150" height="150" />
  <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
  <label for="inputEmail" className="sr-only">Email address</label>
  <input type="email" value={this.state.emailInput} onChange={this.emailchange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
  <label for="inputPassword" className="sr-only">Password</label>
  <input type="password" value={this.state.passwordInput} onChange={this.passwordchange} id="inputPassword" className="form-control" placeholder="Password" required />
  <div className="checkbox mb-3">
   
  </div>
  <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
  <p className="mt-5 mb-3 text-light">&copy; 2020</p>
  <br />
  <p>Or Sign Up <a href="/SignUp">here</a></p>
  </form>


  <div id="myModal" style={{display:this.state.showmodal}} className="modal" tabindex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span onClick={this.spanclick} aria-hidden="true">&times;</span>
          </button>
          <h3>User does not exist!</h3>
        </div>
      </div>
    </div>
  </div>



</div>

</div>

)};
    }

export default SignIn;