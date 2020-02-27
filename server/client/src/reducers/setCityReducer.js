import { SET_CITY } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {

        case SET_CITY: {
            return action.payload || 'Warszawa'
        }

        default:
            return state;
    }
}