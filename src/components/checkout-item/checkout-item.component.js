import React, { useContext } from 'react';
import './checkout-item.style.scss';
import { connect } from 'react-redux';
import { ClearItemFromCart} from '../../redux/cart/cart.action';
import { CartContext } from '../../provider/cart/cart.provider';



const CheckoutItem = ({ cartItem }) => {


    const { removeItem, addItem,clearItemFromCart } = useContext(CartContext);
    const { name, quantity, price, imageUrl } = cartItem;


    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl} />

            </div>
            <span className='name'>{name}</span>

            <span className='quantity'>

                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>

                <span className='value'>{quantity}</span>

                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>${price}</span>

            <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(ClearItemFromCart(item)),
 
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
