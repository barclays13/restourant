import React from 'react';
import './menu-list-item.scss';
import { FaMortarPestle, FaPizzaSlice , FaDrumstickBite, FaUntappd} from "react-icons/fa";

const MenuListItem = ({menuItem, onAddToCart}) => {
    const {title, price, url, category} = menuItem;

    let typeIcon;
    if (category==='meat') {
        typeIcon = <FaDrumstickBite/>
    } else if (category==='pizza') {
        typeIcon = <FaPizzaSlice/>
    } else if (category==='salads') {
        typeIcon = <FaMortarPestle/>
    } else {
        typeIcon = <FaUntappd/>
    }

    return (
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt="Cesar salad"></img>
                <div className="menu__category">Category: <span>{category}</span><div className="category-icon">{typeIcon}</div></div>
                
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button onClick={()=> onAddToCart()} className="menu__btn">Add to cart</button>

            </li>
    )
};



export default MenuListItem;