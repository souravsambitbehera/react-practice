import React from 'react';
import ReactDOM from 'react-dom/client';

import AllProducts from './Components/AllProducts';
import MyState from './Context/MyState';
import { Provider } from 'react-redux';
import store from './Redux/state';
import Calculator from './Components/Calculator';
import LifeCycleMethod from './day1/LifeCycleMethod';
import SearchFunctionality from './SearchFunctionality/SearchFunctionality';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <MyState>
    {/* <AllProducts /> */}
    {/* <Calculator /> */}
    {/* <LifeCycleMethod /> */}
    <SearchFunctionality />
    </MyState>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
