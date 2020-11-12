import React, { Component } from "react";
import Input from "../../Elements/Input/input";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      errors: {},
    };
  }

  handleChange = ({ currentTarget }) => {
    const data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.validate();
    this.doSubmit();
  };

  renderButton(label) {
    return (
      <button type="submit" className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
