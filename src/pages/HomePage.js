import React, {useState, useEffect, useRef,useContext} from 'react';
import Students from '../components/students/students';
import Button from '../components/UI/button/button';
import {DEFUALT_URL,DEFUALT_MY_API_URL} from '../api/ApiConstants';
import Spinner from '../components/UI/spinner/Spinner';
import ErrorHandler from '../components/hoc/ErrorHandler';
import axios from 'axios';
import {StudentContext} from '../context/student/StudentContext';
import {Navigate, useNavigate } from "react-router-dom";


const HomePage = (props) => {

    /*declare list*/
    //const [member, setMember] = useState([])
    const [toggle, setToggle] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [arrayHolder, setArrayHolder] = useState([]);
    const [isLoading,setISLoading]=useState(true);
    const textEl = useRef(null);
    const {member,dispatch}=useContext(StudentContext);

    const options = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":"*",
            "Content-Type": "application/json",
        }
    };

    useEffect(() => {
        console.log(props);
        textEl.current.focus();
        setISLoading(true);

        /*Get info by my Api by axios********************
             axios.get(`${DEFUALT_MY_API_URL}/show_student.php`,options)
                 .then(function (response) {
                     console.log(response);
                 })
                 .catch(function (error) {
                  console.log(error);
                 });
                 */

               fetch(`${DEFUALT_MY_API_URL}/show_student.php`,
                   {
                       method: 'GET',
                       headers: {
                           Accept: 'application/json',
                           'Content-Type': 'application/json',
                           'Access-Control-Allow-Origin': '*',
                           'Access-Control-Allow-Headers':'*',
                           'Access-Control-Allow-Methods':'*',
                       },
                   })
                   .then((res)=>res.json())
                   .then((resJson)=>{
                       setISLoading(false);
                       dispatch({type:'fetch',payload:resJson})
                       //setMember(resJson);
                       setArrayHolder(resJson);
                   })
                   .catch((error) => {
                       console.log(error);
                   })


        /*Get info by my Api********************
        fetch(`${DEFUALT_MY_API_URL}/show_student.php`,
        {
            method: 'GET',
            headers: {
            Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
                'Access-Control-Allow-Headers':'*',
                'Access-Control-Allow-Methods':'*',
        },
        })
            .then((res)=>res.json())
            .then((resJson)=>{
                console.log(resJson)
            })
            .catch((error) => {
                console.log(error);
            })
        */

        /*Get info by axios***********************
        axios.get(`${DEFUALT_URL}/posts`)
            .then(response => {
                setISLoading(false);
                const datas = response.data.slice(0, 4);
                const editDatas = datas.map(d => {
                    return {
                        ...d,
                        score: 20
                    }
                })
                setMember(editDatas);

            })
        */

    }, []);

    const searchBarChangeHandlerEvent = (event) => {
        const filteredItems = arrayHolder.filter((i) => {
            const upItem = i.name.toUpperCase();
            const searchItem = event.target.value.toUpperCase();
            return upItem.indexOf(searchItem) > -1
        })
        dispatch({type:'search',payload:filteredItems})
        //setMember(filteredItems);
        setSearchValue(event.target.value);
    }
    //change events:
    const nameChangeHandlerEvent = (event, id) => {
        const index = member.findIndex((s) => {
            return s.id === id;
        })
        const selectedStudent = {...member[index]};
        selectedStudent.name = event.target.value;
        console.log(selectedStudent.name);
        const allStudent = [...member];
        allStudent[index] = selectedStudent;
        //setMember(allStudent);
    }
    const classNumberChangeHandlerEvent = (event, id) => {
        const index = member.findIndex((s) => {
            return s.id === id;
        })
        const selectedStudent = {...member[index]};
        selectedStudent.classNumber = event.target.value;
        const allStudent = [...member];
        allStudent[index] = selectedStudent;
        //setMember(allStudent);
    }
    const phoneNumberChangeEventHandlerEvent = (event, id) => {
        const index = member.findIndex((s) => {
            return s.id === id;
        })
        const selectedStudent = {...member[index]};
        selectedStudent.phoneNumber = event.target.value;
        const allStudent = [...member];
        allStudent[index] = selectedStudent;
        //setMember(allStudent);
    }
    const emailChangeHandlerEvent = (event, id) => {
        const index = member.findIndex((s) => {
            return s.id === id;
        });
        const selectedStudent = {...member[index]};
        selectedStudent.email = event.target.value;
        const allStudent = [...member];
        allStudent[index] = selectedStudent;
        //setMember(allStudent);
    }

    //delete event:
    const deleteStudentHandlerEvent = (event,id) => {

        //1: delete row of a local list******
        // const allStudent = [...member];
        // allStudent.splice((id-1), 1);
        //1: delete row of another api*******
        // axios.delete(`${DEFUALT_URL}/posts/${id}`)
        //     .then(response=>{
        //         console.log(response);
        // }).catch(error=>{
        //     console.log(error)
        // })
        //setMember(allStudent);


        fetch(`${DEFUALT_MY_API_URL}/delete_student.php`,{
            method:'POST',
            headers:{
                'Accept' : 'applicaion/json',
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body:JSON.stringify({
                id:id
            })
        }).then((response)=>response.json())
            .then((responseJson)=>{
                console.log(responseJson);
                dispatch({type:'delete',payload:id})

            }).catch((error)=>{
            alert(error);
        })
    }


    const navigate = useNavigate();
    const editStudentHandlerEvent = (event, id,name,classNumber,phoneNumber,email) => {
        navigate('/student/'+id, { state: { id: id,name: name,classNumber: classNumber, phoneNumber: phoneNumber, email: email } });
        // props.history.push('/student/'+id); I dont know why the props is undefined but it didn't work.
    }
    const toggleHandlerEvent = () => {
        setToggle(!toggle);
    }
    return (
        <React.Fragment>
            <input type="text"
                   value={searchValue}
                   onChange={searchBarChangeHandlerEvent}
                   ref={textEl}
                   style={{marginTop: '70px'}}/>
            <Button btnType="success" clicked={toggleHandlerEvent}>
                 تغییر وضعیت نمایش لیست دانش آموزان هر کلاس
            </Button>
            {isLoading? <Spinner/>:
                <Students
                    studentList={member}
                    nameChangeHandler={nameChangeHandlerEvent}
                    classNumberChangeHandler={classNumberChangeHandlerEvent}
                    phoneNumberChangeEventHandler={phoneNumberChangeEventHandlerEvent}
                    emailChangeHandler={emailChangeHandlerEvent}
                    deleteStudentHandler={deleteStudentHandlerEvent}
                    editStudentHandler={editStudentHandlerEvent}
                    toggle={toggle}
                />
            }

        </React.Fragment>
    )
}
export default ErrorHandler(HomePage,axios) ;