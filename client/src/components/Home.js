import React from 'react';
import { Card, Header, Image, Container, Icon, } from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components';
import { HeaderText, WordText, } from "../styles/shared";
import { AuthContext } from '../providers/AuthProvider';



class Home extends React.Component {
  // state = { userParams: {} }
  

  
  

  render() {
    const { user } = this.context;
    return(
      <Container>
        <br/>
        <Header as={ HeaderText } fontSize="xl">Myspace</Header>
        <br />
        <br />
        <h3> Welcome back {user.name}</h3>

        {/* <Card.Group centered itemsPerRow={4}>
          { this.renderFriends() }
        </Card.Group> */}
      </Container>
    );
  };
};


Home.contextType = AuthContext
export default Home;