import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => {
    console.log(match.url)
    return (
        <div className={`menu-item ${size}`} onClick={() => {
            history.push(`${match.url}${linkUrl}`)
        }} >
            <div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image" />
            <div className="content">
                <h3 className="title">{title}</h3>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div >
    );
}

export default withRouter(MenuItem);