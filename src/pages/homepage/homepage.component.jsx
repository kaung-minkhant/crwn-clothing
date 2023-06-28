import React, { Component } from "react";
import { HomePageContainer } from "./homepage.styles";

import { WithSpinner } from "../../components/with-spinner/with-spinner.component"
import Menu from "../../components/menu/menu.component";
import MenuContainer from "../../components/menu/menu.container";

import { connect } from "react-redux";
import { fetchMenu } from "../../redux/menu/menuSlice";


class HomePage extends Component {
    componentDidMount() {
        this.props.fetchMenu();
        // const menuRef = retrieveCollectionRef('menu')
        // getDocs(menuRef)
        //     .then(async snapshot => {
        //         const menu_items = await retrieveMenuItems(snapshot)
        //         this.props.updateMenu(menu_items)
        //         this.setState({ loading: false })
        //     })
        // onSnapshot(menuRef, async snapShot => {
        //     const menu_items = await retrieveMenuItems(snapShot)
        //     this.props.updateMenu(menu_items)
        //     this.setState({ loading: false })
        // })
    }
    render() {
        return (
            <HomePageContainer>
                <MenuContainer />
            </HomePageContainer>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    fetchMenu: () => dispatch(fetchMenu())
})

export default connect(null, mapDispatchToProps)(HomePage);