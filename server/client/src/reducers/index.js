import authReducer from './authReducer';
import setCityReducer from './setCityReducer';
import weatherReducer5day from './weatherReducer5day';
import weatherReducer12hours from './weatherReducer12hours';
import weatherReducerCurrent from './weatherReducerCurrent';
import setDayReducer from './setDayReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    auth: authReducer,
    actualCity: setCityReducer,
    weather5days: weatherReducer5day,
    weather12hours: weatherReducer12hours,
    weatherCurrent: weatherReducerCurrent,
    actualDay: setDayReducer
})