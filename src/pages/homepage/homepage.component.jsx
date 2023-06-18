import React from "react";
import { HomePageContainer } from "./homepage.styles";


import Menu from "../../components/menu/menu.component";

const HomePage = () => {
    return (
        <HomePageContainer>
            <Menu />
        </HomePageContainer>
    );
}

export default HomePage;