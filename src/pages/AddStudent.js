import React, {useState, useEffect, useRef,useContext} from 'react';
import NewStudent from '../components/students/newStudent/newStudent';
import {Navigate} from 'react-router-dom';
import axios from 'axios';
import {DEFUALT_URL,DEFUALT_MY_API_URL} from '../api/ApiConstants';
import {AuthContext} from '../context/AuthContext';
import withRouter from '../components/withRouter';
import {useNavigate} from 'react-router-dom';

const AddStudent = (props) => {
    useEffect(() => {
        navigateToHomePage();
    }, []);

    const [sName, setSname] = useState('');
    const [sClassNumber, setSClassNumber] = useState(0);
    const [sPhoneNumber, setSPhoneNumber] = useState(0);
    const [sEmail, setSEmail] = useState('');
    const [result,setResult]=useState(true);
    const [doRedirect,setDoRedirect]=useState(false);
    const [errorMessage,setErrorMessage]=useState('');

    const navigateToHomePage=()=>{
        if(!AuthContext.authenticatated){
            return <Navigate replace to="/"  />;
        }
    }

    const newNameChangeHandlerEvent = (event) => {
        setSname(event.target.value);
    }
    const newClassNumberChangeHandlerEvent = (event) => {
        setSClassNumber(event.target.value);
    }

    const newPhoneNumberChangeHandlerEvent = (event) => {
        setSPhoneNumber(event.target.value);
    }

    const newEmailChangeHandlerEvent = (event) => {
        setSEmail(event.target.value);
    }

    const navigate = useNavigate();
    const addStudentHandlerEvent = () => {

        fetch(`${DEFUALT_MY_API_URL}/insert_student.php`,{
            method:'POST',
            headers:{
                'Accept' : 'applicaion/json',
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body:JSON.stringify({
                name:sName,
                classNumber:sClassNumber,
                phoneNumber:sPhoneNumber,
                email:sEmail
            })
        }).then((response)=>response.json())
            .then((responseJson)=>{
                console.log(responseJson);
                if(responseJson==='YES'){
                    navigate('/',  {replace: true});
                }else{
                    setErrorMessage(responseJson);
                }

            }).catch((error)=>{
            setErrorMessage(error);
        })

        //props.history.push("/"); 1: to redirect to another direction.
        // setResult(true);3: to redirect to another direction.
       // props.history.replace('/'); 2: to redirect to another direction.
       //  const data={ 3: call an api to add new student
       //      title:'foo',
       //      body:'bar',
       //      userId:1
       //  }
       //  axios.post(`${DEFUALT_URL}/posts`,data).then(
       //      response=>{
       //          setResult(true);
       //          setDoRedirect(true);
       //          console.log(response)
       //      }).catch(error=>{
       //      setResult(false);
       //      console.log(error)
       //  })
    }

    let redirect=null;
    if(result && doRedirect){
        redirect=<Navigate replace to="/" />
    }else if(!result) {
        redirect=<h1 style={{textAlign:'center',color:'red'}}>عملیات با خطا مواجه شد . لطفا مجدد تلاش کنید.</h1>
    }

    return (
        <React.Fragment>
            {redirect}
            <NewStudent sName={sName}
                        sClassNumber={sClassNumber}
                        sPhoneNumber={sPhoneNumber}
                        sEmail={sEmail}
                        newNameChangeHandler={newNameChangeHandlerEvent}
                        newClassNumberChangeHandler={newClassNumberChangeHandlerEvent}
                        newPhoneNumberChangeHandler={newPhoneNumberChangeHandlerEvent}
                        newEmailChangeHandler={newEmailChangeHandlerEvent}
                        addStudentHandler={addStudentHandlerEvent}
                        {...props}
            />
        </React.Fragment>
    )
}

export default withRouter(React.memo(AddStudent));