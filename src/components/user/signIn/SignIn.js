import React,{useState,useEffect,useContext} from 'react';
import MyLogg from '../../../assets/images/reactapp-logo.png';
import Button from '../../UI/button/button';
import './SignIn.css';
import captchaImage from '../../../assets/images/reload_image.jpg';
import {AuthContext} from '../../../context/AuthContext';
import {DEFUALT_URL,DEFUALT_MY_API_URL} from '../../../api/ApiConstants';

const SignIn=(props)=>{

    const [ranNumFirst,setRandNumFirst]=useState(0);
    const [ranNumSecond,setRandNumSecond]=useState(0);
    const [sumHolder,setSumHolder]=useState(0);
    const [captchaValue,setCaptchaValue]=useState(0);
    const [errorMessage,setErrorMessage]=useState('');
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const {dispatch}=useContext(AuthContext);
    useEffect(()=>{
        generateCaptcha();
    },[])

    const generateCaptcha=()=>{
      let num1=Math.floor(Math.random()*10)+1;
       let num2=Math.floor(Math.random()*10)+1;

        setRandNumFirst(num1);
        setRandNumSecond(num2);
        let sum=num1+num2;
        setSumHolder(sum);

    }

    const validate=()=>{
        if(userName===''){
            setErrorMessage('userName is required.');
            return false;
        }else if (password===''){
            setErrorMessage('password is required.');
            return false;
        }else if(!userName.includes('@') || !userName.includes('.')){
            setErrorMessage('userName is invalid.');
            return false;
        }else if (password.length<5){
            setErrorMessage('password has to 6 carachres at least');
            return false;
        }

        setErrorMessage('');
        return true;
    }

    const clickSignInHandler=()=>{
        if(sumHolder===captchaValue){
            setErrorMessage('');
            const validateResult=validate();
            if(validateResult){

                fetch(`${DEFUALT_MY_API_URL}/user_login.php`,{
                    method:'POST',
                    headers:{
                        'Accept' : 'applicaion/json',
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                    body:JSON.stringify({
                        email:userName,
                        password:password
                    })
                }).then((response)=>response.json())
                    .then((responseJson)=>{
                        if(responseJson==="Data Matched"){
                            console.log("Data Matched");
                            dispatch({type:'login',payload:userName});
                        }
                        else{
                            setErrorMessage(responseJson)
                        }
                    }).catch((error)=>{
                    alert(error);
                })
            }
        }else{
            setErrorMessage('captchaValue is invalid');
            return false;
        }

    }
    const capchaHandler=(event)=>{
        setCaptchaValue (Number(event.target.value));
    }

    const userNameHandler=(event)=>{
        setUserName(event.target.value);
    }

    const passwordHandler=(event)=>{
        setPassword(event.target.value);
    }

    return(
        <React.Fragment>
            <p style={{color:'red',fontSize:'56'}}>{errorMessage}</p>
            <img src={MyLogg} alt="myLogo.ir"/>
            <input type="text" placeholder="userName" value={userName} onChange={userNameHandler}/>
            <input type="password" placeholder="password" value={password} onChange={passwordHandler}/>

            <div className="captcha_view">
                <img src={captchaImage}
                     alt="reloadImage"
                     onClick={generateCaptcha}/>
                <input type="text"
                       onChange={capchaHandler}/>
                <p>{ranNumFirst}+{ranNumSecond} =</p>
            </div>

            <Button btnType="danger"
                    clicked={clickSignInHandler}>ورود</Button>
        </React.Fragment>
    )
}
export default React.memo(SignIn);