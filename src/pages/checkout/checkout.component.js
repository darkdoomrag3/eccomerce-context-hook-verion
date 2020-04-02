import React,{useContext} from 'react';
import './checkout.style.scss';
import { selectCartTotal } from '../../redux/cart/cart.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../provider/cart/cart.provider';

const CheckoutPage = ({  total }) => {
  
  const {cartItems} = useContext(CartContext);
  
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>

                </div>

                <div className='header-block'>
                    <span>Description </span>

                </div>
                <div className='header-block'>
                    <span>Quantity</span>

                </div>
                <div className='header-block'>
                    <span>Price</span>

                </div>
                <div className='header-block'>
                    <span>Remove</span>

                </div>
            </div>

            {
                cartItems.map(cartItem =>(<CheckoutItem key={cartItem.id} cartItem={cartItem}/>

                ))
            }

            <div className='total'>
        <span>total : ${total}</span>

            </div>

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
   
    total: selectCartTotal
})


export default connect(mapStateToProps)(CheckoutPage);
