import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider"
import { Form, Header, } from "semantic-ui-react";


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
        <Header as="h1" textAlign="center"> Register </Header>
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
          <Form.Button color="violet">
            Submit
          </Form.Button>
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


export default ConnectedRegister;