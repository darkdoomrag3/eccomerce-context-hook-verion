import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { ReactComponent as ShoppingIcon } from '../../assest/1.svg'
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import {CartContext} from '../../provider/cart/cart.provider';

import './card-icon.style.scss';

const CardIcon = () => {

    const {toggleHidden, cartItemsCount} = useContext(CartContext);

    return (
        <div className='cart-icon'>
            <ShoppingIcon className='shopping-icon' onClick={toggleHidden} />
            <span className='item-count'>{cartItemsCount}</span>

        </div>

    )
}





export default CardIcon;