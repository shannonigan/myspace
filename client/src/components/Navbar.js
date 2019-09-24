import React from 'react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Menu, } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';
import styled from "styled-components";


class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: {authenticated, handleLogout, }, location, history } = this.props;

    if (authenticated) {
      return (

        <Menu.Menu position="right">
          <Menu.Item style={{color:"white"}}
            name="logout"
            onClick={() => handleLogout(history)}
          />
        </Menu.Menu>
      );
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
          <Menu.Item style={{color:"white"}}
            name="login"
            active={location.pathname === "/login"}
          />
          </Link>
          <Link to="/register">
          <Menu.Item style={{color:"white"}}
            name="register"
            active={location.pathname === "/register"}
          />
          </Link>
        </Menu.Menu>
      )
    }
  };

  // centerNavItems = () => {
  //   const { auth: {authenticated, }, location, } = this.props;

  //   if (authenticated) {
  //     return (
  //       <Menu.Menu position="middle">
  //         <Link to="/home">
  //         <Menu.Item
  //         name="HOME"
  //         active={location.pathname === "/home"}
  //         />
  //         </Link>
  //         <Link to="/about">
  //         <Menu.Item
  //         name="ABOUT"
  //         active={location.pathname === "/about"}
  //         />
  //         </Link>
  //       </Menu.Menu>
  //     )
  //   } else {
  //     return (
  //       <Menu.Menu position="middle">
  //       <div>
  //         WELCOME
  //       </div>
  //       </Menu.Menu>
  //     )
  //   }
  // };

  render() {
    return (
      <NavContainer>
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item style={{color:"white"}}
            name="Myspace"
            active={this.props.location.pathname === "/"}
            />
          </Link>
          { this.rightNavItems()}
          {/* { this.centerNavItems() } */}
        </Menu>
      </NavContainer>
    )
  }
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { auth => (
      <Navbar {...props} auth={auth} />
    )}
  </AuthConsumer>
);

const NavContainer = styled.div`
  padding-top: 5px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 5px;
  background: #060656;
  border-radius: 50px;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 10px;
`;


export default withRouter(ConnectedNavbar);