
// import loggedReducer from './isLogged';
// import counterReducer from './counter';
// import {combineReducers} from 'redux';

// export default combineReducers({
//     loggedReducer,
//     counterReducer
// })

// const allReducers=combineReducers({
//     isLogged:loggedReducer,
//     counter:counterReducer
// });

// export default allReducer;

import loggedReducer from './reducer/isLogged';
import counterReducer from './reducer/counter';
import {createStore,combineReducers} from 'redux';

const allReducers=combineReducers({
    isLogged:loggedReducer,
    counter:counterReducer
});
export default allReducer;