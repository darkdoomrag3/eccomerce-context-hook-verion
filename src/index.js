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


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>

            <PersistGate persistor={persistor}>
                <App />

            </PersistGate>

        </BrowserRouter>
    </Provider>


    , document.getElementById('root'));
