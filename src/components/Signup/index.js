import React from "react";
import { CardWraper } from "../../Elements/CardWrapper/CardWrapper.styled";
import { Input } from "../../Elements/Input/Input.styled";

function Register() {
  return (
    <div>
      <CardWraper>
        <form action="" method="post">
          <Input type={"text"} defaultValue={"User Name"} id="" />
          <Input type={"email"} defaultValue={"Email"} name="email" id="" />
          <Input
            type={"password"}
            defaultValue={"Password"}
            name="password"
            id=""
          />
          <Input type={"submit"} value="Register" />
        </form>
      </CardWraper>
    </div>
  );
}
export default Register;
