import React from "react";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionContainer } from "./header.styles";

import { ReactComponent as Logo } from '../../assets/084 crown.svg'

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";

// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header = () => {
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
                            onClick={() => signOut(auth)}
                        >SIGN OUT</OptionContainer>)
                        : (<OptionContainer as={Link} to={'/signin'}>SIGN IN</OptionContainer>)
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown />
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