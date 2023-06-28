import React, { Component } from "react";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";


import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { shopSagaActions } from "../../redux/shop/shop.sagas.actions";
// import { fetchShopCollection } from "../../redux/shop/shopSlice";

class ShopPage extends Component {

    componentDidMount() {
        this.props.fetchShopCollection();
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route exact path={`${match.path}/:collectionID`} component={CollectionPageContainer} />
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
    // fetchShopCollection: (collection_name) => dispatch(fetchShopCollection(collection_name))
    fetchShopCollection: () => dispatch({type: shopSagaActions.fetch_collection, payload: 'collections'})
})


export default connect(null, mapDispatchToProps)(ShopPage);