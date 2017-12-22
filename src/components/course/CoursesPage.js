import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {title: ""}
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave(){
        //this.props.dispatch(courseActions.createCourse(this.state.course));
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index){
        return <div key = {index}>{course.title}</div>;
    }

    render () {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />

                <input
                    type="button"
                    value="Save" 
                    onClick={this.onClickSave} />    
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