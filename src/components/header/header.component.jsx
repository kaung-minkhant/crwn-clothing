import React from "react";
import { ReactComponent as Logo } from '../../assets/084 crown.svg'
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { withRouter } from "react-router-dom";
import './header.styles.scss'

const Header = ({ currentUser, history }) => {
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
                        (<Link to={history.location.pathname} onClick={() => auth.signOut()}>SIGN OUT</Link>)
                        : (<Link to={'/signin'} className="option">SIGN IN</Link>)
                }
            </div>
        </div>
    );
}

export default withRouter(Header);