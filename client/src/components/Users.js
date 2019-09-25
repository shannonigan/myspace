import React from 'react';
import { Card, Header, Image, Container, Icon, } from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components';
import { HeaderText, WordText, } from "../styles/shared";



class SuggestedFriends extends React.Component {
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

  ignore = (id) => { 
    const {friends} = this.state
    this.setState({ friends: friends.filter( f => f.id !== id)});
  };

  follow = (id) => {
    const {friends } = this.state
    axios.put(`/api/friends/${id}`)
      .then( () => this.setState({friends: friends.filter( f => f.id !== id)})
      )
    };
 

  renderFriends = () => {
    const { friends, } = this.state;
    if (friends.length <=0)
    return <Header a="h2">No homies around here</Header>
    return friends.map( friend => (
      <Card>
          <Image src={ friend.avatar } />
        <Card.Content>
          <Card.Header as={ WordText } fontSize="small">{ friend.name }</Card.Header>
          <br />
        </Card.Content>
        <Card.Content extra>
          <IgnoreButton icon basic onClick={() => this.ignore(friend.id)} >
            <Icon name="dont" />
          </IgnoreButton>
          <FollowButton icon basic onClick={() => this.follow(friend.id)} >
            <Icon name="add circle" />
          </FollowButton>
        </Card.Content>
      </Card>
    ))
  }


  // sample = () => {
  //   if (friends.length) {
  //     const index = Math.floor(Math.random() * friends.length);
  //     return friends[index];
  //   } else {
  //     return null;
  //   }
  // };

  // renderFriends = () => {
  //   const { friends, } = this.state.sample;
  //   if (friends) {
  //   return friends.map( friend => (
  //     <Card>
  //         <Image src={ friend.avatar } />
  //       <Card.Content>
  //         <Card.Header as={ WordText } fontSize="small">{ friend.name }</Card.Header>
  //         <br />
  //       </Card.Content>
  //       <Card.Content extra>
  //         <IgnoreButton icon basic onClick={() => this.ignore(friend.id)} >
  //           <Icon name="dont" />
  //         </IgnoreButton>
  //         <FollowButton icon basic onClick={() => this.follow(friend.id)} >
  //           <Icon name="add circle" />
  //         </FollowButton>
  //       </Card.Content>
  //     </Card>
  //   ))
  //   } else {
  //     return <Header a="h2">No homies around here</Header>
  //   }
  // }



  render() {

    return(
      <Container>
        <br/>
        <Header as={ HeaderText } fontSize="medium"> Check out your community. </Header>
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
    background: #ff00008a;
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
    background: #54d85499;
    transition: background 0.2s ease;
  }
`;



export default SuggestedFriends;