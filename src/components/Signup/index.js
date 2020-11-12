import React from "react";
import Form from "../Form/Form";

class Register extends Form {
  state = {
    data: {
      username: "",
      email: "",
      password: "",
    },
  };

  doSubmit() {
    console.log("submit");
  }
  render() {
    return (
      <React.Fragment>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-5 border p-5">
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("username", "Username")}
                {this.renderInput("email", "Email")}
                {this.renderInput("password", "Password", "password")}
                {this.renderButton("Register")}
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Register;
