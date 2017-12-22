import * as types from './actionTypes';

export function createCourse(course) {
    return { type: types.CREATE_COURSE, course }; //ES6 equals course: course
}