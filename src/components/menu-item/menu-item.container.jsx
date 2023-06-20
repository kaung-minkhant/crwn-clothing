import { compose } from "redux";
import { withRouter } from "react-router-dom";
import MenuItem from "./menu-item.component"

const MenuItemContainer = compose(
    withRouter
)(MenuItem)

export default MenuItemContainer