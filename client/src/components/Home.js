import React from 'react';
import { Card, Header, Image, Container, } from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components';
import { HeaderText, } from "../styles/shared";


class Home extends React.Component {
  state = { friends: [], };

     
  componentDidMount() {
    axios.get("/api/friends")
      .then( res => {
        this.setState({ friends: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }

  renderFriends = () => {
    const { friends, } = this.state;
    if (friends.length <=0)
    return <Header a="h2">Ain't Got None</Header>
    return friends.map( friend => (
      <Card>
          <Image src={ friend.avatar } />
        <Card.Content>
          <Card.Header>{ friend.name }</Card.Header>
          <br />
          
        </Card.Content>
      </Card>
    ))
  }
  render() {

    return(
      <Container>
        <br/>
        <Header as={ HeaderText } fontSize="medium">Users</Header>
        <br />
        <br />
        <Card.Group centered itemsPerRow={4}>
          { this.renderFriends() }
        </Card.Group>
      </Container>
    );
  };
};

// const Wrapper = styled.section`
//   padding: 4em;
//   background: lightgreen;
// `;
export default Home;