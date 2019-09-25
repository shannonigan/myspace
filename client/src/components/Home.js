import React from 'react';
import { Card, Header, Image, Container, Icon, } from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components';
import { HeaderText, WordText, } from "../styles/shared";



class Home extends React.Component {
  

  render() {

    return(
      <Container>
        <br/>
        <Header as={ HeaderText } fontSize="xl">Myspace</Header>
        <br />
        <br />
        {/* <Card.Group centered itemsPerRow={4}>
          { this.renderFriends() }
        </Card.Group> */}
      </Container>
    );
  };
};



export default Home;