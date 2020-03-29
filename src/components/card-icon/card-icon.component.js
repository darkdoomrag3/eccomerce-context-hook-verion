import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { ReactComponent as ShoppingIcon } from '../../assest/1.svg'
import {selectCartItemsCount} from '../../redux/cart/cart.selector';


import './card-icon.style.scss';

const CardIcon = ({ toggleCartHidden,itemCount }) => (

    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
<span className='item-count'>{itemCount}</span>

    </div>

)

const mapDispatchToProps = dispatch => ({

    toggleCartHidden: () => dispatch(toggleCartHidden())

})


const mapStateToProps = (state) => ({

itemCount :selectCartItemsCount(state)

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardIcon);