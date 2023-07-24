import { server } from '../Store';
import axios from 'axios';

export const register = (name, email, password) => async dispatch => {

    console.log(name, email, password);
    try {
        dispatch({ type: 'registerRequest' });

        const { data } = await axios.post(`${server}/register`, { name, email, password },
            { headers: { 'content-type': 'application/json' }, withCredentials: true }
        );
        console.log(data);
        dispatch({ type: 'registerSuccess', payload: data });
    } catch (error) {
        dispatch({ type: 'registerFail', payload: error.response.data.message });
    }
};

export const login = (email, password) => async dispatch => {
    try {
        dispatch({ type: 'loginRequest' });

        const { data } = await axios.post(
            `${server}/login`,
            { email, password },
            { headers: { 'content-type': 'application/json' }, withCredentials: true }
        );

        dispatch({ type: 'loginSuccess', payload: data });
    } catch (error) {
        dispatch({ type: 'loginFail', payload: error.response.data.message });
    }
}

export const logOut = () => async dispatch => {
    try {
        dispatch({ type: 'logOutRequest' });

        const { data } = await axios.get(
            `${server}/logout`,

            { withCredentials: true }
        );

        dispatch({ type: 'logOutSuccess', payload: data.message });
    } catch (error) {
        dispatch({ type: 'logOutFail', payload: error.response.data.message });
    }
};
