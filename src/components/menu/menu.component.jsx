import React from "react";
import { MenuContainer } from "./menu.styles";

import MenuItem from "../menu-item/menu-item.component";

import { useSelector } from "react-redux";
import { selectMenuItems } from "../../redux/menu/menu.selector";

const Menu = () => {
    const menu_items = useSelector(selectMenuItems)
    return (
        <MenuContainer>
            {
                menu_items.map(({ title, id, imageUrl, size, linkUrl }) =>
                    <MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
                )
            }

        </MenuContainer>
    )
}


export default Menu;