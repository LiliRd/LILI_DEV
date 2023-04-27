import React,{useEffect} from 'react';
import classes from './newStudent.module.css';
import Button from '../../UI/button/button';
import PropTypes from 'prop-types';
import WithClass from '../../hoc/WithClass';
import {useParams} from 'react-router-dom';
import withRouter from '../../withRouter';

const NewStudent=(props)=>{
    useEffect(()=>{
        console.log(props);
    },[])
    const {sName,sClassNumber,sPhoneNumber,sEmail,newNameChangeHandler,newClassNumberChangeHandler,newPhoneNumberChangeHandler,newEmailChangeHandler,addStudentHandler}=props;
    return(
        <React.Fragment>

            <h1>افزودن دانش آموز جدید</h1>
            <label>نام و نام خانوادگی</label>
            <input type="text" value={sName}  onChange={newNameChangeHandler} />

            <label>کلاس</label>
            <input type="text" value={sClassNumber}  onChange={newClassNumberChangeHandler}/>

            <label>شماره نلفن</label>
            <input type="number" value={sPhoneNumber} onChange={newPhoneNumberChangeHandler}/>

            <label>ایمیل</label>
            <input type="email" value={sEmail} onChange={newEmailChangeHandler}/>

            <Button btnType='danger' clicked={addStudentHandler}>
                ثبت
            </Button>
        </React.Fragment>
    )
}

export default React.memo(withRouter(WithClass(NewStudent,classes.NewStudentPos)));

NewStudent.propTypes={
    sName:PropTypes.string.isRequired,
    sClassNumber:PropTypes.number.isRequired,
    sPhoneNumber:PropTypes.number.isRequired,
    sEmail:PropTypes.string.isRequired,
    addStudentHandler:PropTypes.func.isRequired,
    newNameChangeHandler:PropTypes.func.isRequired,
    newClassNumberChangeHandler:PropTypes.func.isRequired,
    newPhoneNumberChangeHandler:PropTypes.func.isRequired,
    newEmailChangeHandler:PropTypes.func.isRequired
}