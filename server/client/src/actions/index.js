import axios from 'axios';
import { FETCH_USER, SET_CITY, FETCH_WEATHER_5DAY, FETCH_WEATHER_12HOURS, FETCH_WEATHER_CURRENT, SET_DAY } from './types';

export const fetchUser = () => async dispatch => {
    const response = await axios.get('/api/current_user');
    dispatch({
        type: FETCH_USER,
        payload: response.data
    })
}

export const setCity = (newCity) => {
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

export const fetchWeather_5days = () => async (dispatch, getState) => {
    const city = getState().actualCity;
    const res = await axios.post('/api/weather_5days', { city });
    dispatch({ type: FETCH_WEATHER_5DAY, payload: res.data });
};

export const fetchWeather_12hours = () => async (dispatch, getState) => {
    const city = getState().actualCity;
    const res = await axios.post('/api/weather_12hours', { city });
    dispatch({ type: FETCH_WEATHER_12HOURS, payload: res.data });
};

export const fetchWeather_current = () => async (dispatch, getState) => {
    const city = getState().actualCity;
    const res = await axios.post('/api/weather_current', { city });
    dispatch({ type: FETCH_WEATHER_CURRENT, payload: res.data });
};

export const setDay = (number) => {
    return {
        type: SET_DAY,
        payload: number
    }
}

