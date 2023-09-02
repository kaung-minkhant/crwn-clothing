import { compose } from "redux";
import { connect } from "react-redux";
import { WithSpinner } from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.component";
import { createStructuredSelector } from "reselect";
import { selectIsFetching } from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer
