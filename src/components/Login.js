import React, { Component } from 'react';

import firebase from '../config/firebase';

class Login extends Component {

  constructor() {
    super();

    const provider = new firebase.auth.GoogleAuthProvider();

    this.state = {
      email: '',
      password: '',
      provider: provider,
    };

    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this._onGoogleLogin = this._onGoogleLogin.bind(this);
  }

  _onChange(event) {
    const target = event.target;

    this.setState({ [target.name]: target.value });
  }

  _onSubmit() {
    const email = this.state.email;
    const password = this.state.password;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((res) => {
      alert('Success');
    })
    .catch((error) => {
      alert(`Error (${error.code}): ${error.message}`);
    });
  }

  _onGoogleLogin() {
    firebase.auth().signInWithRedirect(this.state.provider);
  }

  render() {
    return (
      <div className="Login">
        <label>Email</label>
        <input type='text' name='email' value={this.state.email} onChange={this._onChange}/>
        <label>Password</label>
        <input type='password' name='password' value={this.state.password} onChange={this._onChange}/>
        <button onClick={this._onSubmit}>Login</button>
        <hr/>
        <button onClick={this._onGoogleLogin}>Google login</button>
      </div>
    );
  }
}

export default Login;
