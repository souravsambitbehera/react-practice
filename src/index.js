import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './Learn/store';
import ReactRedux from './Learn/ReactRedux';
import FormValidation from './Practice/FormValidation';
import ProductsData from './Practice/ProductsData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
   {/* <FormValidation /> */}
   <ProductsData/>
   </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
