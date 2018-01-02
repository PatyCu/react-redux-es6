import * as types from '../actions/actionTypes';
import initialSate from './initialSate';

export default function authorReducer(state = initialSate.authors, action) {
    switch(action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            return state;
    }
}