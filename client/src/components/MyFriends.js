import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { Card, Divider, Image, Header, } from 'semantic-ui-react';
import { HeaderText, WordText, } from "../styles/shared";


const MyFriends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios.get('/api/my_friends')
      .then( res => setFriends(res.data))
  }, []);

  return(
    <>
    <br/>
    <br/>
    <Header as={ HeaderText } fontSize="xl"> Followed Friends </Header>
    <Card.Group itemsPerRow={4}>
      { friends.map( friend => (
        <Card key={friend.id}>
          <Image src={friend.avatar} />
          <Card.Content>
            <Divider />
            <Card.Header>
              { friend.name }
            </Card.Header>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
    </>
  )
};

export default MyFriends;