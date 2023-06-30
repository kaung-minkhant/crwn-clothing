import React from "react";
import { SignInButtons, SignInSignUpContainer, SignInSignUpTitle } from "./sign-in.styles";


import FormInput from "../form-input/form-input.component";
import CustomButtom from "../custom-buttom/custom-buttom.component";

import { connect } from "react-redux";
import { userSagaActions } from "../../redux/user/user.sagas.actions";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        this.props.emailSignInStart(email, password);
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        // console.log(event);
        const { name, value } = event.target
        this.setState({ [name]: value })

    }


    render() {
        const {googleSignInStart} = this.props;
        return (
            <SignInSignUpContainer>
                <SignInSignUpTitle>I already have an account</SignInSignUpTitle>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label={'Email'}
                        name={'email'}
                        type={'email'}
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput
                        label={'Password'}
                        name={'password'}
                        type={'password'}
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />

                    <SignInButtons>
                        <CustomButtom type={'submit'}>Sign In</CustomButtom>
                        <CustomButtom onClick={googleSignInStart} type={'button'} isGoogleSignIn>Sign in with Google</CustomButtom>
                    </SignInButtons>
                </form>
            </SignInSignUpContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch({type: userSagaActions.GOOGLE_SIGNIN_START}),
    emailSignInStart: (email, password) => dispatch({type: userSagaActions.EMAIL_SIGNIN_START, payload: {email, password}})
})

export default connect(null, mapDispatchToProps)(SignIn);