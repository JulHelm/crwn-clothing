import React from 'react';
import { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './signup.styles.scss';
import CustomButton from '../custom-button/costum-button.component';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      displayName: '',
      confirmPassword: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  render() {
    return (
      <div className='sign-up'>
        <h2>I don`t have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='Display Name'
            type='text'
            name='displayName'
            value={this.state.displayName}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            label='Email'
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type='Password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />

          <FormInput
            type='Confirm Password'
            name='confirmPassword'
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
            required
          />

          <CustomButton type='submit'>SIGN Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
