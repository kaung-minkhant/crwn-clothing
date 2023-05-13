import React from "react";

import './custom-buttom.styles.scss'

const CustomButtom = ({ children, ...otherButtonProps }) => {
    return (
        <div className="custom-button-wrap">
            <button className="custom-button" {...otherButtonProps}>{children}</button>
        </div>
    );
}

export default CustomButtom;