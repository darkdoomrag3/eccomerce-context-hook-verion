import React,{useContext} from 'react'
import './collection-item.style.scss'
import CustomButton from '../custom-button/custom-button.component'
import {CartContext} from '../../provider/cart/cart.provider';


const CollectionItem = ({item }) => {
    
    const {addItem}=useContext(CartContext)

    const {name,price,imageUrl}=item;
    
    return (
        <div className='collection-item'>

            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} >


            </div>


            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price' >${price}</span>

            </div>

            <CustomButton inverted onClick={()=>addItem(item) }>Add To Card</CustomButton>


        </div>
    )
}





export default CollectionItem;
