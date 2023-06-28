import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectMenuLoad } from "../../redux/menu/menu.selector";
import Menu from "./menu.component";
import { WithSpinner } from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectMenuLoad
})

const MenuContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Menu)

export default MenuContainer;