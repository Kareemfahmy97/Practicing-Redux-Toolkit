import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import counterReducer from './counterSlice';
import usersReducer from './usersSlice';

const store = configureStore({
    reducer: {auth: authReducer, counter: counterReducer, users: usersReducer}
},

);

export default store;

