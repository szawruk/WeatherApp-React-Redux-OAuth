import axios from 'axios';
import { FETCH_USER, SET_CITY, FETCH_WEATHER_5DAY, FETCH_WEATHER_12HOURS, FETCH_WEATHER_CURRENT, SET_DAY, CITY_FOUND, CITY_NOT_FOUND } from './types';
import { changePolishWord } from '../components/usefulFuncions';


export const fetchUser = () => async dispatch => {
    const response = await axios.get('/api/current_user');
    dispatch({
        type: FETCH_USER,
        payload: response.data
    })
}

export const setCity = (city) => dispatch => {
    let polishName = city;

    city = changePolishWord(city);

    axios.post('/api/city', { city })
        .then(response => {
            if (response.status === 200) {
                dispatch({
                    type: SET_CITY,
                    payload: polishName
                })
                dispatch({
                    type: CITY_FOUND,
                    payload: 'yes'
                })
                dispatch(
                    fetchWeather_12hours()
                )
                dispatch(
                    fetchWeather_5days()
                )
                dispatch(
                    fetchWeather_current()
                )
            } else {
                console.log('another error: ' + response.status);
            }
        })
        .catch(e => {

            if (e.response.status === 404) {
                console.log("error in setCity");
                dispatch({
                    type: CITY_NOT_FOUND,
                    payload: 'no'
                })
            }
        })


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
    let city = getState().actualCity;
    city = changePolishWord(city);
    const res = await axios.post('/api/weather_5days', { city });
    dispatch({ type: FETCH_WEATHER_5DAY, payload: res.data });
};

export const fetchWeather_12hours = () => async (dispatch, getState) => {
    let city = getState().actualCity;
    city = changePolishWord(city);
    const res = await axios.post('/api/weather_12hours', { city });
    dispatch({ type: FETCH_WEATHER_12HOURS, payload: res.data });
};

export const fetchWeather_current = () => async (dispatch, getState) => {
    let city = getState().actualCity;
    city = changePolishWord(city);
    const res = await axios.post('/api/weather_current', { city });
    dispatch({ type: FETCH_WEATHER_CURRENT, payload: res.data });
};

export const setDay = (number) => {
    return {
        type: SET_DAY,
        payload: number
    }
}

