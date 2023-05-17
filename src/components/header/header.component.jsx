import React from "react";
import './header.styles.scss'

import { ReactComponent as Logo } from '../../assets/084 crown.svg'

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link to={'/'} className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to={'/shop'} className="option">SHOP</Link>
                <Link to={'/contact'} className="option">CONTACT</Link>
                {
                    currentUser ?
                        // (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
                        (<Link
                            to={'/'}
                            onClick={() => signOut(auth)}
                            className="option"
                        >SIGN OUT</Link>)
                        : (<Link to={'/signin'} className="option">SIGN IN</Link>)
                }
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);