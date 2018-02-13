import React, { Component } from 'react';

import Register from './components/Register';
import Login from './components/Login';

class App extends Component {
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
