export default function defaultDisplayStateReducer(state = { newKey: null }, action) {
import { SET_DEFAULT_DISPLAY_FALSE } from '../constants/ActionTypes';
    switch (action.type) {
        case SET_DEFAULT_DISPLAY_FALSE:
            return { ...state, newKey: false }

        default:
    }
    return state;
}