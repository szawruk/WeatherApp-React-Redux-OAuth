import { FETCH_WEATHER_CURRENT } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {

        case FETCH_WEATHER_CURRENT: {
            return action.payload || false
        }

        default:
            return state;
    }
}