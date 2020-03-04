import { FETCH_WEATHER_5DAY } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {

        case FETCH_WEATHER_5DAY: {
            return action.payload || false
        }

        default:
            return state;
    }
}