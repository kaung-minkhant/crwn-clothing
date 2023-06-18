import React, { Component } from "react";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import { WithSpinner } from "../../components/with-spinner/with-spinner.component";


import { onSnapshot } from "firebase/firestore";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
// import { useDispatch } from "react-redux";
import { setShopData } from "../../redux/shop/shopSlice";
import { retrieveCollectionRef, retrieveCollectionItems } from "../../firebase/firebase.utils";


const CollectionOverWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)


class ShopPage extends Component {
    state = {
        isLoading: true
    }

    async componentDidMount() {
        const collectionRef = retrieveCollectionRef('collections')
        onSnapshot(collectionRef, async (snapShot) => {
            const shop_data = await retrieveCollectionItems(snapShot)
            this.props.setData(shop_data)
            this.setState({ isLoading: false })
        })
    }

    render() {
        const { match } = this.props;
        const { isLoading } = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => (<CollectionOverWithSpinner isLoading={isLoading} {...props} />)} />
                <Route exact path={`${match.path}/:collectionID`} render={(props) => (<CollectionPageWithSpinner isLoading={isLoading} {...props} />)} />
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