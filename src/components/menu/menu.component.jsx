import React from "react";
import "./menu.styles.scss"

import MenuItem from "../menu-item/menu-item.component";

import { useSelector } from "react-redux";
import { selectMenuItems } from "../../redux/menu/menu.selector";

const Menu = () => {
    const menu_items = useSelector(selectMenuItems)
    return (
        <div className="menu">
            {
                menu_items.map(({ title, id, imageUrl, size, linkUrl }) =>
                    <MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
                )
            }

        </div>
    )
}


export default Menu;