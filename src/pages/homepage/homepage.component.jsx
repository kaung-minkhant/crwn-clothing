import React, { Component } from "react";
import { HomePageContainer } from "./homepage.styles";

import { WithSpinner } from "../../components/with-spinner/with-spinner.component"
import Menu from "../../components/menu/menu.component";

import { retrieveCollectionRef, retrieveMenuItems } from "../../firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";
import { updateMenuItems } from "../../redux/menu/menuSlice";
import { connect } from "react-redux";


const MenuWithSpinner = WithSpinner(Menu)

class HomePage extends Component {
    state = {
        loading: true
    }
    async componentDidMount() {
        const menuRef = retrieveCollectionRef('menu')
        // getDocs(menuRef)
        //     .then(async snapshot => {
        //         const menu_items = await retrieveMenuItems(snapshot)
        //         this.props.updateMenu(menu_items)
        //         this.setState({ loading: false })
        //     })
        onSnapshot(menuRef, async snapShot => {
            const menu_items = await retrieveMenuItems(snapShot)
            this.props.updateMenu(menu_items)
            this.setState({ loading: false })
        })
    }
    render() {
        const { loading } = this.state;
        return (
            <HomePageContainer>
                <MenuWithSpinner isLoading={loading} />
            </HomePageContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateMenu: menu_items => dispatch(updateMenuItems(menu_items))
})

export default connect(null, mapDispatchToProps)(HomePage);