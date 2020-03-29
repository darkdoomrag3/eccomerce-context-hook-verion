import React from 'react';
import { connect } from 'react-redux';
import Preview from '../../components/preview-collection/preview-collection.component';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selector';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import { Route } from 'react-router-dom';
import collectionPage from '../category/collectionPage';



const ShopPage = ({ match }) => (

    <div className='shop-page'>

        <Route exact patch={`${match.patch}`} component={CollectionOverview} />
        <Route path={`${match.patch}/:collectionId`} component={collectionPage} />
    </div>

)


export default ShopPage;
