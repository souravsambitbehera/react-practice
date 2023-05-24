import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AppSetup from './App';
import TodoList from './Practice/FirstComponent';
import ParentComponent from './Practice/PpropsComponent';
import Profile from './Practice/PpropsComponent';
import ObjectComponent from './Practice/ObjectComponent';
import ShoppingCart from './Practice/ShoppingCart';
import EditProfile from './Practice/EditProfile';
import ReducerDemo from './Practice/ReducerDemo';
import ChallengeOne from './Coding/ChallengeOne';
import Repractice from './Coding/Repractice';
import ChallengheTwo from './Coding/ChallengheTwo';
import ChallengeThree from './Coding/ChallengeThree';
import ChallengeFour from './Coding/ChallengeFour';
import ChallengeFive from './Coding/ChallengeFive';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    {/* <AppSetup /> */}
    {/* <TodoList /> */}
    {/* <Profile /> */}
    {/* <ObjectComponent /> */}
    {/* <Todo /> */}
    {/* <ShoppingCart /> */}
    {/* <EditProfile /> */}
    {/* <ChallengeOne /> */}
    {/* <ChallengeTwo /> */}
    {/* <ReducerDemo/> */}
    {/* <ChallengeOne /> */}
    {/* <Repractice /> */}
    {/* <ChallengheTwo /> */}
    {/* <ChallengeThree /> */}
    {/* <ChallengeFour /> */}
    <ChallengeFive />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
