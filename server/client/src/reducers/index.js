import authReducer from './authReducer';
import setCityReducer from './setCityReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    auth: authReducer,
    actualCity: setCityReducer
})