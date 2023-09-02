import React from "react";
import { CustomButtomContainer } from "./custom-buttom.styles";

const CustomButtom = ({ children, ...props }) => {
    return (
        <CustomButtomContainer {...props}>
            {children}
        </CustomButtomContainer >
    );
}

export default CustomButtom;