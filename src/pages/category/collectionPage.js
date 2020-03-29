import React from 'react';
import './collection.style.scss';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.compoenet';


const collectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>  
            {
                items.map(item=>(
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
            </div>


        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.prams.collectionId)(state)

})


export default connect(mapStateToProps)(collectionPage);
