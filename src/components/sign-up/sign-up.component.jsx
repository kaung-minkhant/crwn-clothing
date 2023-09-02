import React from 'react'
import { SignUpButtons } from './sign-up.styles'
import {
  SignInSignUpContainer,
  SignInSignUpTitle,
} from '../sign-in/sign-in.styles'

import FormInput from '../form-input/form-input.component'
import CustomButtom from '../custom-buttom/custom-buttom.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { connect } from 'react-redux'
import { userSagaActions } from '../../redux/user/user.sagas.actions'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleChange = (event) => {
    // console.log(event);
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }
    try {
      this.props.signup(email, password, displayName)
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      console.log(`Error occured ${error}`)
    }
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <SignInSignUpContainer>
        <SignInSignUpTitle>I do not have account</SignInSignUpTitle>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label={'Display Name'}
            required
            name={'displayName'}
            type={'text'}
            value={displayName}
          />
          <FormInput
            handleChange={this.handleChange}
            label={'Email'}
            required
            name={'email'}
            type={'email'}
            value={email}
          />
          <FormInput
            handleChange={this.handleChange}
            label={'Password'}
            required
            name={'password'}
            type={'password'}
            value={password}
          />
          <FormInput
            handleChange={this.handleChange}
            label={'Confirm Password'}
            required
            name={'confirmPassword'}
            type={'password'}
            value={confirmPassword}
          />
          <SignUpButtons>
            <CustomButtom type={'submit'}>sign up</CustomButtom>
          </SignUpButtons>
        </form>
      </SignInSignUpContainer>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  signup: (email, password, displayName) =>
    dispatch({
      type: userSagaActions.SIGN_UP,
      payload: { email, password, displayName },
    }),
})

export default connect(null, mapDispatchToProps)(SignUp)
