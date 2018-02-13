import React, { Component } from 'react';

import firebase from '../config/firebase';

class Register extends Component {

  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onChange(event) {
    const target = event.target;

    this.setState({ [target.name]: target.value });
  }

  _onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    const email = this.state.email;
    const password = this.state.password;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => {
      alert('Success');
    })
    .catch((error) => {
      alert(`Error (${error.code}): ${error.message}`);
    });
  }

  render() {
    return (
      <div className="Register">
        <label>Email</label>
        <input type='text' name='email' value={this.state.email} onChange={this._onChange}/>
        <label>Password</label>
        <input type='password' name='password' value={this.state.password} onChange={this._onChange}/>
        <button onClick={this._onSubmit}>Login</button>
      </div>
    );
  }
}

export default Register;
