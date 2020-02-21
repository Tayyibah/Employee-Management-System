import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import { allReducers} from './reducer/index';
import { Provider } from 'react-redux';
 import loggedReducer from './reducer/isLogged';
 import counterReducer from './reducer/counter';
 import {createStore,combineReducers} from 'redux';

const allReducers=combineReducers({
    isLogged:loggedReducer,
    counter:counterReducer
});

// //Store

// //Action
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }
// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }
// //Reducer
// const counter = (state = 0, action) => {
//     switch (action.type) {
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//         default:
//             return state;
//     }
// }
// let store=createStore(counter);

// //display it on console
// store.subscribe(()=>console.log(store.getState()));
// //dispatch
// store.dispatch(increment());
// store.dispatch(decrement());
const myStore=createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//store.subscribe(()=>console.log(store.getState()));
//store.dispatch("SIGNIN");
//store.dispatch("INCREMENT");

ReactDOM.render(
<Provider store={myStore}>
<App />
</Provider>
, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
