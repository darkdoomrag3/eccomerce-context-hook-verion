import React, { createContext, useContext } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './card-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component';

import { withRouter } from 'react-router-dom';
import { selectCartItemCount, selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { CartContext } from '../../provider/cart/cart.provider';

const CardDropDown = ({history }) => {
   
   const {cartItems,toggleHidden}=useContext(CartContext);
    
   return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                        <span className='empty-message'>Your cart is empty</span>
                    )}
            </div>
            <CustomButton
                onClick={() => {
                    history.push('/chekout');
                    toggleHidden();
                }}
            >
                GO TO CHECKOUT
        </CustomButton>
        </div>
    )
}

export default withRouter(CardDropDown);
