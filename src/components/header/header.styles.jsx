import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    // align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const OptionContainer = styled.div`
    padding: 10px 15px;
`