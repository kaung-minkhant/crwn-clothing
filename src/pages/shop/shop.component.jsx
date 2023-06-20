import React, { Component } from "react";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import { WithSpinner } from "../../components/with-spinner/with-spinner.component";


import { Route } from "react-router-dom";
import { connect } from "react-redux";
// import { useDispatch } from "react-redux";
import { fetchShopCollection } from "../../redux/shop/shopSlice";
import { createStructuredSelector } from "reselect";
import { selectIsFetching } from "../../redux/shop/shop.selector";

const CollectionOverWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)


class ShopPage extends Component {

    componentDidMount() {
        this.props.fetchShopCollection('collections');
    }

    render() {
        const { match, isFetching } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => (<CollectionOverWithSpinner isLoading={isFetching} {...props} />)} />
                <Route exact path={`${match.path}/:collectionID`} render={(props) => (<CollectionPageWithSpinner isLoading={isFetching} {...props} />)} />
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
    fetchShopCollection: (collection_name) => dispatch(fetchShopCollection(collection_name))
})

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetching
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);