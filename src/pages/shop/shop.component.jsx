import React, { Component } from "react";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";


import { onSnapshot } from "firebase/firestore";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
// import { useDispatch } from "react-redux";
import { setShopData } from "../../redux/shop/shopSlice";
import { retrieveCollectionRef, retrieveCollectionItems } from "../../firebase/firebase.utils";

class ShopPage extends Component {
    async componentDidMount() {
        const collectionRef = retrieveCollectionRef('collections')
        onSnapshot(collectionRef, async (snapShot) => {
            const shop_data = await retrieveCollectionItems(snapShot)
            this.props.setData(shop_data)
        })
    }

    render() {
        return (
            <div className="shop-page">
                <Route exact path={`${this.props.match.path}`} component={CollectionOverview} />
                <Route exact path={`${this.props.match.path}/:collectionID`} component={CollectionPage} />
            </div>
        )
    }
}

// const ShopPage = ({ match }) => {
//     return (
//         <div className="shop-page">
//             <Route exact path={`${match.path}`} component={CollectionOverview} />
//             <Route exact path={`${match.path}/:collectionID`} component={CollectionPage} />
//         </div>
//     )
// }

const mapDispatchToProps = dispatch => ({
    setData: data => dispatch(setShopData(data))
})

export default connect(null, mapDispatchToProps)(ShopPage);