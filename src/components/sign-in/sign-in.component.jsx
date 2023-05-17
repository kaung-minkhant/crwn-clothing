import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButtom from "../custom-buttom/custom-buttom.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";

import './sign-in.styles.scss'

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
        await signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // this.props.history.push("/")
                // console.log(userCredential)
            })
            .catch(error => {
                console.log(error)
            })
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        // console.log(event);
        const { name, value } = event.target
        this.setState({ [name]: value })

    }


    render() {
        return (
            <div className="sign-in">
                <h2 className="sign-in-title">I already have an account</h2>
                <span className="sign-in-text">Sign in with your email and password.</span>

                <form className="sign-in-form" onSubmit={this.handleSubmit}>
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

                    <div className="form-buttons">
                        <CustomButtom type={'submit'}>Sign In</CustomButtom>
                        <CustomButtom onClick={signInWithGoogle} type={'button'} isGoogleSignIn>Sign in with Google</CustomButtom>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;