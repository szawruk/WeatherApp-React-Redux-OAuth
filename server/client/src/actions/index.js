import axios from 'axios';
import { FETCH_USER, SET_CITY } from './types';

export const fetchUser = () => async dispatch => {
    const response = await axios.get('/api/current_user');
    dispatch({
        type: FETCH_USER,
        payload: response.data
    })
}

export const setCity = (newCity) => {
    console.log(newCity);
    return {
        type: SET_CITY,
        payload: newCity
    }
}

export const addCity = () => async (dispatch, getState) => {
    const city = getState().actualCity;
    const res = await axios.post('/api/cities/add', { city });


    dispatch({ type: FETCH_USER, payload: res.data });
};

export const deleteCity = () => async (dispatch, getState) => {
    const city = getState().actualCity;
    const res = await axios.post('/api/cities/delete', { city });


    dispatch({ type: FETCH_USER, payload: res.data });
};