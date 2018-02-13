import React, { Component } from 'react';

import firebase from '../config/firebase';

class Login extends Component {

  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);

    console.log(process.env, process.env.REACT_APP_API_URL);
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

  render() {
    return (
      <div className="Login">
        <label>Email</label>
        <input type='text' name='email' value={this.state.email} onChange={this._onChange}/>
        <label>Password</label>
        <input type='password' name='password' value={this.state.password} onChange={this._onChange}/>
        <button onClick={this._onSubmit}>Login</button>
      </div>
    );
  }
}

export default Login;
