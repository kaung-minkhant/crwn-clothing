import React from "react";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionContainer } from "./header.styles";

import { ReactComponent as Logo } from '../../assets/084 crown.svg'

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdownContainer from "../cart-dropdown/cart-dropdown.container";

import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";

// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { userSagaActions } from "../../redux/user/user.sagas.actions";

const Header = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);
    return (
        <HeaderContainer>
            <LogoContainer to={'/'}>
                <Logo />
            </LogoContainer>
            <OptionsContainer>
                <OptionContainer as={Link} to={'/shop'}>SHOP</OptionContainer>
                <OptionContainer as={Link} to={'/contact'}>CONTACT</OptionContainer>
                {
                    currentUser ?
                        // (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
                        (<OptionContainer as={Link}
                            to={'/'}
                            onClick={() => dispatch({type: userSagaActions.SIGN_OUT})}
                        >SIGN OUT</OptionContainer>)
                        : (<OptionContainer as={Link} to={'/signin'}>SIGN IN</OptionContainer>)
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropdownContainer />
            }
        </HeaderContainer>
    );
}

// const mapStateToProps = createStructuredSelector({
//     currentUser: selectCurrentUser,
//     hidden: selectCartHidden
// })

// export default connect(mapStateToProps)(Header);
export default Header;
