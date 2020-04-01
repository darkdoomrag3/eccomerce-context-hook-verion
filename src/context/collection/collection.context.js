import {createContext} from 'react';
import SHPP_DATA from './shop.data';


const CollectionsContext = createContext(SHPP_DATA);

export default CollectionsContext;
