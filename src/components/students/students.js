import React from 'react';
import Student from './student/student';
import './student/students.css'
import PropTypes from 'prop-types';
import ErrorBoundary from '../../components/errorBundary/errorBundary';

const Students = (props) => {
    let mapStudent = props.studentList.map((s, index) =>
        <ErrorBoundary key={index}>
        <Student
            id={s.id}
            name={s.name}
            classNumber={s.classNumber}
            phoneNumber={s.phoneNumber}
            email={s.email}
            nameChangeHandler={(event) => props.nameChangeHandler(event, s.id)}
            classNumberChangeHandler={(event) => props.classNumberChangeHandler(event, s.id)}
            phoneNumberChangeHandler={(event) => props.phoneNumberChangeHandler(event, s.id)}
            emailChangeHandler={(event) => props.emailChangeHandler(event, s.id)}
            deleteStudentHandler={(event)=>props.deleteStudentHandler(event,s.id)}
            editStudentHandler={(event)=>props.editStudentHandler( event,s.id,s.name,s.classNumber,s.phoneNumber,s.email)}
        />
        </ErrorBoundary>
    )

    if (props.toggle) {
        return (
            <div className="student-section">
                {mapStudent}
            </div>
        )
    }
    return (mapStudent);

}

export default React.memo( Students);


Students.propTypes={
    studentList:PropTypes.array.isRequired,
    nameChangeHandler:PropTypes.func.isRequired,
    classNumberChangeHandler:PropTypes.func.isRequired,
    phoneNumberChangeHandler:PropTypes.func.isRequired,
    emailChangeHandler:PropTypes.func.isRequired,
    deleteStudentHandler:PropTypes.func.isRequired,
    clicked:PropTypes.func.isRequired,
    toggle:PropTypes.bool.isRequired
}