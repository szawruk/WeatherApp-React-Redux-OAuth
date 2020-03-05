import { SET_DAY } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {

        case SET_DAY: {
            return action.payload;
        }

        default:
            return state;
    }
}