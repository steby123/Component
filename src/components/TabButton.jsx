import React from "react";

const TabButton = ({children,onSelect, isSelected, ...spread}) => {
    return <li><button className={isSelected ? 'active' : undefined} {...spread}>{children}</button></li>;
}

export default TabButton;