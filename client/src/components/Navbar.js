import React from 'react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Menu, } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';


class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: {authenticated, handleLogout, }, location, history } = this.props;

    if (authenticated) {
      return (
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            onClick={() => handleLogout(history)}
          />
        </Menu.Menu>
      );
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
          <Menu.Item
            name="login"
            active={location.pathname === "/login"}
          />
          </Link>
          <Link to="/register">
          <Menu.Item
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
      <Menu pointing secondary>
        <Link to="/">
          <Menu.Item
          name="Myspace"
          active={this.props.location.pathname === "/"}
          />
        </Link>
        { this.rightNavItems()}
        {/* { this.centerNavItems() } */}
      </Menu>
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


export default withRouter(ConnectedNavbar);