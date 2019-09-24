import React from 'react';
import { Card, Header, Image, Container, Button, Icon, } from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components';
import { HeaderText, WordText, } from "../styles/shared";


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


  // ignore = () => {

  // }

  // follow = () => {
    
  // }


  renderFriends = () => {
    const { friends, } = this.state;
    if (friends.length <=0)
    return <Header a="h2">Ain't Got None</Header>
    return friends.map( friend => (
      <Card>
          <Image src={ friend.avatar } />
        <Card.Content>
          <Card.Header as={ WordText } fontSize="small">{ friend.name }</Card.Header>
          <br />
        </Card.Content>
        <Card.Content extra>
          <IgnoreButton color="red" icon basic >
            <Icon name="dont" />
          </IgnoreButton>
          <FollowButton icon basic >
            <Icon name="add circle" />
          </FollowButton>
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

const IgnoreButton = styled.button`
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
  font-size: 25px;
  border-radius: 25px;
  color: red;


  &:hover {
    background: grey;
    transition: background 0.2s ease;
  }
`;

const FollowButton = styled.button`
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
  font-size: 25px;
  border-radius: 25px;
  margin-left: 130px;
  color: green;

  &:hover {
    background: rgba(30, 85, 90, 0.87);
    transition: background 0.2s ease;
  }
`;



// const Wrapper = styled.section`
//   padding: 4em;
//   background: lightgreen;
// `;
export default Home;