import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`menu-item ${size}`} >
            <div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image" />
            <div className="content">
                <h3 className="title">{title}</h3>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div >
    );
}

export default MenuItem;