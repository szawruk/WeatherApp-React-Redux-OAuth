import { SET_DAY } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {

        case SET_DAY: {
            return action.payload || 1
        }

        default:
            return state;
    }
}