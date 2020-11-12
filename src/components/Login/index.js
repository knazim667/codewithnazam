import React from "react";
import Form from "../Form/Form";

class Login extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };
  doSubmit() {
    console.log("submit");
  }
  validate = () => {
    const { data } = this.state;
    const errors = { ...this.state.errors };
    if (data.username === "") {
      errors.username = "Username must be Enter !";
    }
    if (data.password === "") {
      errors.password = "Password must be Enter !";
    }
    this.setState({ errors });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-5 border p-5">
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("username", "Username")}
                {this.renderInput("password", "Password", "password")}
                {this.renderButton("Login")}
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
