import styled, { css } from "styled-components";

const CustomButtomBaseStyles = css`
    box-sizing: border-box;
    appearance: none;
    background-color: transparent;
    border: 2px solid black;
    border-radius: 0.6em;
    cursor: pointer;
    display: flex;
    align-self: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    // margin: 20px;
    padding: 5px 10px;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    
    &:hover {
        color: #fff;
        outline: 0;
    }

    &:hover {
        box-shadow: 0 0 40px 40px black inset;
    }
`

const CustomButtomGoogleSignInStyles = css`
    color: #4285F4;
    border-color: #4285F4;

    &:hover {
        color: #fff;
        box-shadow: 0 0 40px 40px #00008B inset;
    }
`

const CustomButtomInvertedStyles = css`
    background-color: black;
    color: #fff;
    outline: 0;

    &:hover {
        color: black;
        box-shadow: 0 0 40px 40px white inset;
    }
`

const getCustomButtonStyle = props => {
    if (props.isGoogleSignIn) {
        return CustomButtomGoogleSignInStyles
    } else if (props.inverted) {
        return CustomButtomInvertedStyles
    } else {
        return `
            color: black;
        `;
    }

}

export const CustomButtomContainer = styled.button`
    ${CustomButtomBaseStyles}
    ${getCustomButtonStyle}
`