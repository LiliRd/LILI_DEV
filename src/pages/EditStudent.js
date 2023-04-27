import React,{useEffect,useContext,useState} from 'react';
import Button from '../components/UI/button/button';
import './style/EditStudent.css';
import {AuthContext} from '../context/AuthContext';
import {Navigate,useLocation,useNavigate} from 'react-router-dom';
import {DEFUALT_URL,DEFUALT_MY_API_URL} from '../api/ApiConstants';

const EditStudent =(props)=>{

    useEffect(()=>{
        navigateToHomePage();
    },[]);

    const navigateToHomePage=()=>{
        if(!AuthContext.authenticatated){
            return <Navigate replace to="/"  />;
        }
    }
    const location=useLocation();
    const {id,name,classNumber,phoneNumber,email}=location.state;
    const [cucurrentName,setCurrentName]=useState(name);
    const [cucurrentClassNumber,setCurrentClassNumber]=useState(classNumber);
    const [cucurrentPhoneNumber,setPhoneNumber]=useState(phoneNumber);
    const [cucurrentEmail,setCurrentEmail]=useState(email);
    const [cucurrentId,setCurrentId]=useState(id);
    const [errorMessage,setErrorMessage]=useState('');

    const navigate = useNavigate();
    const editStudentHandler=()=>{
        fetch(`${DEFUALT_MY_API_URL}/update_student.php`,{
            method:'POST',
            headers:{
                'Accept' : 'applicaion/json',
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body:JSON.stringify({
                id:cucurrentId,
                name:cucurrentName,
                classNumber:cucurrentClassNumber,
                phoneNumber:cucurrentPhoneNumber,
                email:cucurrentEmail
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
    }


    return (
      <div className="students">
          <h1>errorMessage</h1>
          <h1>ویرایش دانش آموز</h1>
          <label>نام و نام خانوادگی</label>
          <input type="text" value={cucurrentName} onChange={(event)=>setCurrentName(event.target.value)}/>

          <label>کلاس</label>
          <input type="text" value={cucurrentClassNumber} onChange={(event)=>setCurrentClassNumber(event.target.value)} />

          <label>شماره نلفن</label>
          <input type="number" value={cucurrentPhoneNumber} onChange={(event)=>setPhoneNumber(event.target.value)}/>

          <label>ایمیل</label>
          <input type="email" value={cucurrentEmail} onChange={(event)=>setCurrentEmail(event.target.value)}/>

          <Button btnType='danger' clicked={editStudentHandler}>
              ویرایش اطلاعات
          </Button>
      </div>
    )
}

export default EditStudent;