import React from 'react';
import './BackDrop.css';
const BackDrop =(props)=>{
    return (

        props.show?  <div className="BackDrop"  onClick={props.modalCloseHandler}></div> : null
    )

}

export default React.memo(BackDrop)