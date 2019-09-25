import React from 'react';


  // ignore = (id) => { 
  //   this.setState(this.state.friends.filter( f => f.id !== id));
  // };

  // follow = (id) => {
  //   axios.put(`/api/friends/${id}`)
  //     .then( res => {
  //       this.setState(() => this.state.friends.filter( f => f.id !== id))}
  //     )
  //   };
 

  // renderFriends = () => {
  //   const { friends, } = this.state;
  //   if (friends.length <=0)
  //   return <Header a="h2">No homies around here</Header>
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
  // }

