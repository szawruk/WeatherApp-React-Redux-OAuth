import { CITY_FOUND, CITY_NOT_FOUND } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {

        case CITY_FOUND: {
            return action.payload
        }

        case CITY_NOT_FOUND: {
            return action.payload
        }

        default:
            return state;
    }
}