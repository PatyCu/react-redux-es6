import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    courseRow(course, index){
        return <div key = {index}>{course.title}</div>;
    }

    render () {
        const {courses} = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses = {courses} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,    
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    // we define the props that we would like to see exposed on our component
    // state within the redux store
    return {
        // state.courses set by the reducer
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //createCourse: course => dispatch(courseActions.createCourse)
        actions: bindActionCreators(courseActions, dispatch)
    };
}

//const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
//export default connectedStateAndProps(CoursesPage);
// we use the function returned by connect to call CoursesPage
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);