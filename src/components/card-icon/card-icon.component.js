import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { ReactComponent as ShoppingIcon } from '../../assest/1.svg'
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import CartContext from '../../context/cart/cart.context';

import './card-icon.style.scss';

const CardIcon = ({ itemCount }) => {

    const {toggleHidden} = useContext(CartContext);

    return (
        <div className='cart-icon'>
            <ShoppingIcon className='shopping-icon' onClick={toggleHidden} />
            <span className='item-count'>{itemCount}</span>

        </div>

    )
}



const mapStateToProps = (state) => ({

    itemCount: selectCartItemsCount(state)

})

export default connect(
    mapStateToProps
)(CardIcon);