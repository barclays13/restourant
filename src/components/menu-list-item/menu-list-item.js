import React from 'react';
import './menu-list-item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const MenuListItem = ({menuItem}) => {
    const {title, price, url, category} = menuItem;

    if (category === 'meat'){
        console.log(0);
    } 
    return (
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt="Cesar salad"></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button className="menu__btn">Add to cart</button>
            </li>
    )
}

export default MenuListItem;