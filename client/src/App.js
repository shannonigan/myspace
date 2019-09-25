import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NoMatch from './components/NoMatch';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import Users from './components/Users'
import MyFriends from './components/MyFriends';
import { Container, } from 'semantic-ui-react';
import { Switch, Route, } from 'react-router-dom';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/my_friends" component={MyFriends} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/users" component={Users} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)


export default App;
