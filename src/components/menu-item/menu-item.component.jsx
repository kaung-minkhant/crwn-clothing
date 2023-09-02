import React from "react";
import { BackgroundImageContainer, ContentContainer, MenuItemContainer, MenuSubtitleSpan, MenuTitle } from "./menu-item.styles";


const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => {
    return (
        <MenuItemContainer size={size} onClick={() => {
            history.push(`${match.url}${linkUrl}`)
        }} >
            <BackgroundImageContainer imageUrl={imageUrl} className="background-image" />
            <ContentContainer className="content./">
                <MenuTitle>{title}</MenuTitle>
                <MenuSubtitleSpan>SHOP NOW</MenuSubtitleSpan>
            </ContentContainer>
        </MenuItemContainer >
    );
}

export default MenuItem;