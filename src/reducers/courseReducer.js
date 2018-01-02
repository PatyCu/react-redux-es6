import * as types from '../actions/actionTypes';
import initialSate from './initialSate';

export default function courseReducer(state = initialSate.courses, action) {
    switch(action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}