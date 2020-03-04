import axios from 'axios';
import { FETCH_USER, SET_CITY, FETCH_WEATHER } from './types';

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

export const fetchWeather = () => async (dispatch, getState) => {
    const city = getState().actualCity;
    const locationKey = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=vMY1c8uZgM9hNrXSp2JBp8s65XBjcX32&q=${city}`);
    const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=vMY1c8uZgM9hNrXSp2JBp8s65XBjcX32&details=true`);
    dispatch({ type: FETCH_WEATHER, payload: response.data });
};