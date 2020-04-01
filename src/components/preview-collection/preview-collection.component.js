import React from 'react'
import './preview-collection.style.scss';
import CollectionItem from '../collection-item/collection-item.compoenet';
import CollectionContext from '../../context/collection/collection.context';

const Preview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>

            <div className='preview'>

                {
                    items.filter((item,idx)=>idx < 4).map( (item) => (
                       <CollectionItem key={item.id} item={item} />

                    ))

                }

            </div>
        </div>
    )
}

export default Preview;
