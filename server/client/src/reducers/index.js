import authReducer from './authReducer';
import setCityReducer from './setCityReducer';
import weatherReducer from './weatherReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    auth: authReducer,
    actualCity: setCityReducer,
    weather: weatherReducer
})