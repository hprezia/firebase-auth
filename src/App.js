import React, { Component } from 'react';

import Register from './components/Register';
import Login from './components/Login';

import firebase from './config/firebase';

class App extends Component {

  componentDidMount() {
    firebase.auth().getRedirectResult().then(function(result) {
      const user = result.user;
      if (!!user) {        
        alert(`Seja bem vindo ${user.displayName}`);
      }        
    }).catch(function(error) {
      alert(`Error (${error.code}): ${error.message}`);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>New User</h1>
        <Register/>
        <h1>Login</h1>
        <Login/>
      </div>
    );
  }
}

export default App;
