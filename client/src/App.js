import React, {Component} from 'react';
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




//spotify attempt

// // import hash from "./hash";
// import * as $ from "jquery";
// import Player from "./components/Player";
// export const authEndpoint = 'https://accounts.spotify.com/authorize';
// // Replace with your app's client ID, redirect URI and desired scopes
// const clientId = "46781512d4174fdd98f513905de1857e";
// const redirectUri = "http://localhost:3000";
// const scopes = [
//   "user-read-currently-playing",
//   "user-read-playback-state",
// ];


// // Get the hash of the url
// const hash = window.location.hash
//   .substring(1)
//   .split("&")
//   .reduce(function(initial, item) {
//     if (item) {
//       var parts = item.split("=");
//       initial[parts[0]] = decodeURIComponent(parts[1]);
//     }
//     return initial;
//   }, {});
// window.location.hash = "";

//   class App extends Component {
//     constructor() {
//       super();
//       this.state = {
//         token: null,
//       item: {
//         album: {
//           images: [{ url: "" }]
//         },
//         name: "",
//         artists: [{ name: "" }],
//         duration_ms:0,
//       },
//       is_playing: "Paused",
//       progress_ms: 0
//     };
//     this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
//     }
//     getCurrentlyPlaying(token) {
//       // Make a call using the token
//       $.ajax({
//         url: "https://api.spotify.com/v1/me/player",
//         type: "GET",
//         beforeSend: (xhr) => {
//           xhr.setRequestHeader("Authorization", "Bearer " + token);
//         },
//         success: (data) => {
//           this.setState({
//             item: data.item,
//             is_playing: data.is_playing,
//             progress_ms: data.progress_ms,
//           });
//         }
//       });
//     }

//   componentDidMount() {
//     // Set token
//     let _token = hash.access_token;
//     if (_token) {
//       // Set token
//       this.setState({
//         token: _token
//       });
//     }
//   }


// render() {
//   return (
//     <div className="App">
//       <Navbar />
//     <FetchUser>
//       <Container>
//         <Switch>
//           <ProtectedRoute exact path="/" component={Home} />
//           <ProtectedRoute exact path="/my_friends" component={MyFriends} />
//           <Route exact path="/login" component={Login} />
//           <Route exact path="/register" component={Register} />
//           <Route exact path="/users" component={Users} />
//           <Route component={NoMatch} />
//         </Switch>
//       </Container>
//     </FetchUser>

//       <header className="App-header">
//       {!this.state.token && (
//         <a
//           className="btn btn--loginApp-link"
//           href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
//         >
//           Login to Spotify
//         </a>
//       )}
//       {this.state.token && (
//         <Player
//         item={this.state.item}
//         is_playing={this.state.is_playing}
//         progress_ms={this.progress_ms}
//       />
//       )}
//       </header>
    
//     </div>
//   );
//   }
// }


// export default App;


