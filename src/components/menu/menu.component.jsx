import React from "react";
import { MenuContainer } from "./menu.styles";

import MenuItemContainer from "../menu-item/menu-item.container";

import { useSelector } from "react-redux";
import { selectMenuItemsAsArray } from "../../redux/menu/menu.selector";


const Menu = () => {
    const menu_items = useSelector(selectMenuItemsAsArray)
    return (
        <MenuContainer>
            {
                menu_items.map(({ title, id, imageUrl, size, linkUrl }) =>
                    <MenuItemContainer key={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
                )
            }

        </MenuContainer>
    )

}


export default Menu;