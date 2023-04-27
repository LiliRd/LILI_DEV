import React, {useState,useContext} from 'react';
import './Toolbar.css';
import Logo from '../../../components/logo/Logo';
import MenuItems from '../menuItems/MenuItems';
import Button from '../../../components/UI/button/button';
import Modal from '../../../components/UI/modal/Modal'
import SignIn from '../../../components/user/signIn/SignIn';
import SideDrawer from '../sidedrawer/SideDrawer';
import {AuthContext} from '../../../context/AuthContext';
import {ThemeContext} from '../../../context/theme/ThemeContext';
import {Navigate} from 'react-router-dom';
import withRouter from '../../../components/withRouter';

const Toolbar = (brops) => {

    const [showModal, setShowModal] = useState(false);
    const [openSideDrawer,setOpenSideDrawer]=useState(false);
    const authContext=useContext(AuthContext);
    const themContext=useContext(ThemeContext);
    const {lightTheme,light,dark}=themContext;
    const t=lightTheme? light:dark;


    const modulClickHandler = () => {
        return setShowModal(true);
    }

    const modalCloseHandler = () => {
        return setShowModal(false);
    }

    const sideDrawerShowHandler=()=>{
        setOpenSideDrawer(true)
    }

    const closeDrawerHandler=()=>{
        setOpenSideDrawer(false)
    }

    const logou=()=>{
        authContext.dispatch({type:'logout'});
        navigateToHomePage();
    }
    const themeHandler=()=>{
        themContext.changeTheme();
    }

    const navigateToHomePage=()=>{
      return <Navigate replace to="/"  />;
    }

    //to show button
    let auth=false;
    const userInfo=JSON.parse(localStorage.getItem('user'));
    if(userInfo){
        auth=true;
    }

    return (
        <header className="Toolbar" style={{background:t.bg,color:t.syntax}}>
            <SideDrawer show={openSideDrawer} closeDrawerHandler={closeDrawerHandler}/>
            <div onClick={sideDrawerShowHandler}>HambergerIcon</div>
            <span className="showNav" onClick={themeHandler}>
                <Logo height="100%"/>
             </span>
            <span className="showNav">
                <nav>
                    <MenuItems/>
                </nav>
                   </span>
            <span className="showNav">
                {auth ?
                    <Button btnType="danger" clicked={logou}>خروج</Button> :
                    <Button btnType="danger" clicked={modulClickHandler}>ورود و ثبت نام</Button>
                }
            </span>
            {
                <Modal show={showModal} modalCloseHandler={modalCloseHandler}>
                    <SignIn/>
                </Modal>

            }

        </header>
    )
}

export default withRouter(React.memo(Toolbar));