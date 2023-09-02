import { createStructuredSelector } from "reselect"
import { selectIsFetching } from "../../redux/shop/shop.selector"
import { connect } from "react-redux"
import { compose } from "redux"
import { WithSpinner } from "../../components/with-spinner/with-spinner.component"
import CollectionPage from "./collection.component"

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetching
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer
