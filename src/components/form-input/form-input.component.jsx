import React from "react";

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, required, ...otherProps }) => {
    return (
        <div className="container">
            <div className="did-floating-label-content">
                <input className="did-floating-input"
                    onChange={handleChange}
                    required={required}
                    {...otherProps}
                    placeholder=" "
                />
                {
                    label ?
                        <label className="did-floating-label">{label}</label>
                        : null
                }

            </div>
        </div>
    );
}

export default FormInput;