import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { store, persistor } from './redux/sotre';
import { PersistGate } from 'redux-persist/integration/react'
import CartProvider from './provider/cart/cart.provider';



ReactDOM.render(

    <CartProvider>
        <Provider store={store}>
            <BrowserRouter>

                <PersistGate persistor={persistor}>
                    <App />

                </PersistGate>

            </BrowserRouter>
        </Provider>
    </CartProvider>

    , document.getElementById('root'));
