import React from 'react';
import Button from '../../UI/button/button'
import "./students.css";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Student = (props) => {

    return (
        <div className="students">
            <label> {props.id}: شماره دانش آموز</label>
            <label> {props.name}: نام و نام خانوادگی </label>
            <label> {props.classNumber}: کلاس</label>
            <label>شماره نلفن : {props.phoneNumber} </label>
            <label> {props.email}: ایمیل</label>

            <label>
                <Button btnType="danger" clicked={props.deleteStudentHandler}>
                    حذف
                </Button>

                <Button btnType="success" clicked={props.editStudentHandler}>
                  ویرایش با Nav
                </Button>

                <Link
                    to={"/student/"+props.id}
                    state={{
                        id: props.id,
                        name: props.name,
                        classNumber: props.classNumber,
                        phoneNumber: props.phoneNumber,
                        email: props.email
                    }}
                    key={props.id}
                >
                    <Button btnType="success">
                       ویرایش با لینک
                    </Button>
                </Link>

            </label>

        </div>
    );

}

export default React.memo(Student);
Student.propTypes = {
    name: PropTypes.string.isRequired,
    classNumber: PropTypes.number.isRequired,
    phoneNumber: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    nameChangeHandler: PropTypes.func.isRequired,
    classNumberChangeHandler: PropTypes.func.isRequired,
    emailChangeHandler: PropTypes.func.isRequired,
    phoneNumberChangeHandler: PropTypes.func.isRequired,
    deleteStudentHandler: PropTypes.func.isRequired
}