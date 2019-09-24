import React from 'react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Form, Header, } from 'semantic-ui-react';
import styled from 'styled-components';
import { HeaderText, } from "../styles/shared";


class Login extends React.Component {
  state = { email: "", password: "", };

  handleChange = (e, {name, value, }) => {
    this.setState({ [name]: value, });
  };

  handleSubmit = (e) => {
    const { auth: {handleLogin, }, history, } = this.props;
    e.preventDefault();
    handleLogin(this.state, history);
  };

  render() {
    return (
      <div>
        <br/>
        <Header as={ HeaderText } fontSize="medium"> Login </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input inverted
            label="Email"
            placeholder="Email"
            type="email"
            required
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Form.Input inverted
            label="Password"
            placeholder="Password"
            type="password"
            required
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
         
          <StyledButton color="violet">
            Submit
          </StyledButton>
        </Form>
      </div>
    );
  };
};

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { auth => (
      <Login {...props} auth={auth} />
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

export default ConnectedLogin;