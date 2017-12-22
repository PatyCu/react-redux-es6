import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_COURSE:
            // NOT IMMUTABLE!
            //state.push(action.course);
            //return state;
            //spread the array, and creates a deep copy of a new state with the new course
            return [...state,
                Object.assign({}, action.course)
            ];
        default:
            return state;
    }
}