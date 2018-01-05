import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import * as courseActions from '../actions/courseActions';
import initialState from '../reducers/initialState';

//integration test
describe('Store', () => {
    it('Should handle creating courses', () => {
        // arrange
        const store = createStore(rootReducer, initialState);
        const course = {
            title: "Clean Code"
        };

        // act
        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        // assert
        const actual = store.getState().courses[0];
        const expected = {
            title: "Clean Code"
        };

        expect(actual).toEqual(expected);
    });
});