import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButtom from "../custom-buttom/custom-buttom.component";

import './sign-up.styles.scss'

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => {
        // console.log(event);
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = async event => {
        console.log(event);
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return
        }
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                // console.log(user)
                await createUserProfileDocument(user, { displayName })
                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                })
            })
            .catch(error => {
                console.log(`Error occured ${error}`)
            })

    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="sign-up-title">I do not have account</h2>
                <span className="sign-up-text">Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
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
                    <div className="sign-up-button">
                        <CustomButtom type={'submit'} >sign up</CustomButtom>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;