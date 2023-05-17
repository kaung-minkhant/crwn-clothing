import React from "react";
import './custom-buttom.styles.scss'

const CustomButtom = ({ children, isGoogleSignIn, inverted, ...otherButtonProps }) => {
    return (
        <button
            className={
                `custom-button 
                ${isGoogleSignIn ? 'google-sign-in' : ''}
                ${inverted ? 'inverted' : ''}`}
            {...otherButtonProps}
        >
            {children}
        </button>
    );
}

export default CustomButtom;