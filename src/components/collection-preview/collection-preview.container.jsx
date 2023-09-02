import { compose } from "redux";
import { withRouter } from "react-router-dom";
import CollectionPreview from './collection-preview.component'

const CollectionPreviewContainer = compose(
    withRouter
)(CollectionPreview)

export default CollectionPreviewContainer