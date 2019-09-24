import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider"
import { Form, Header, } from "semantic-ui-react";
import styled from "styled-components";
import { HeaderText, } from "../styles/shared";


class Register extends React.Component {
  state = { email: "", password: "", passwordConfirmation: "", };


  handleChange = (e, {name, value, }) => {
    this.setState({ [name]: value, })
  };

  handleSubmit = (e) => {
    const { email, password, passwordConfirmation, } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;
    e.preventDefault();
    
    if (password === passwordConfirmation)
      handleRegister({email, password }, history);
    else
      alert("Passwords don't match");
  };


  render() {
    return(
      <div>
        <br/>
        <Header as={ HeaderText } fontSize="medium"> Register </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
          label="Email"
          required
          autoFocus
          name="email"
          value={ this.state.email }
          placeholder="Email"
          onChange={this.handleChange}
          type="email"
          />   
          <Form.Input
          label="Password"
          required
          name="password"
          value={ this.state.password }
          placeholder="Password"
          onChange={this.handleChange}
          type="password"
          />     
          <Form.Input
          label="Password Confirmation"
          required
          name="passwordConfirmation"
          value={ this.state.passwordConfirmation }
          placeholder="Password Confirmation"
          onChange={this.handleChange}
          type="password"
          />     
          <StyledButton color="violet">
            Submit
          </StyledButton>
        </Form>
      </div>
    );
  };
};
  

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { auth => (
      <Register {...props} auth={auth} />
    )}
  </AuthConsumer>
);

const StyledButton = styled.button`
  background: rgba(17, 125, 167, 0.87);
  border: none;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  outline: none;
  font-size: 15px;
  border-radius: 15px;
  border: 1px solid white;

  &:hover {
    background: rgba(143, 224, 255, 0.87);
    transition: background 0.2s ease;
  }
`;


export default ConnectedRegister;