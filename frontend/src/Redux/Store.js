import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './Reducer/userReducer';



const store = configureStore({
    reducer: {
        user: userReducer
    },
});

export default store;

export const server = 'http://localhost:4000/api/v1';
