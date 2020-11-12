import React , {useState} from "react";
import { Component } from "react";
import { CardWraper } from "../../Elements/CardWrapper/CardWrapper.styled";
import { Input } from "../../Elements/Input/Input.styled";

class Register extends Component {
  constructor(props){
    super(props);
    this.state ={


        userName : '',
        email : '',
        password : ''
   
   }
  }

  handleChange =( e) =>{
    this.setState({ ...this.state, [e.target.name] : e.target.value
       })
  }
render(){

  return (
    <div>
      <CardWraper>
        <form style={{margin : '10px auto'}}>
          <Input type={"text"} name="userName" value={this.state.userName} 
          onChange={(e) => this.handleChange(e)}/>
          <Input type={"email"}  value={this.state.email} name="email" onChange={(e)=>this.handleChange(e)}/>
          <Input
            type={"password"}
            name="password"
            id=""
            value={this.state.password}
            onChange={(e)=>this.handleChange(e)}
          />
          <Input type={"submit"} value="Register" />
        </form>
      </CardWraper>
    </div>
  );
}
  
}
export default Register;
