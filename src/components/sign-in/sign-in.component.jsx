import React from "react";

import "./sign-in.styles.scss";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            label="Email"
            value={this.state.email}
          />

          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            label="Password"
            value={this.state.password}
          />

          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
