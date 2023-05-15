import React from "react";

import './custom-buttom.styles.scss'

const CustomButtom = ({ children, isGoogleSignIn, ...otherButtonProps }) => {
    return (
        <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`} {...otherButtonProps}>{children}</button>
    );
}

export default CustomButtom;