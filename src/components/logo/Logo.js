import React from 'react';
import './Logo.css';
import MyLogo from '../../assets/images/reactapp-logo.png';

const Logo =(props)=>{
    return (
        <div className="Logo" style={{height:props.height}} >
            <img  src={MyLogo} alt="reactapp.ir logo"/>
        </div>
    )

}
export default React.memo(Logo);
