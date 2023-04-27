import React from 'react';
import './Modal.css';
import BackDrop from '../backdrop/BackDrop';
const Modal =(props)=>{
    return (
        <React.Fragment>
            <BackDrop show={props.show} modalCloseHandler={props.modalCloseHandler}/>
            <div className="Modal"
                 style={{transform:props.show?'translateX(0)':'translateX(-100vw)',
                     opacity:props.show?'1':'0'
                 }}
            >
                {props.children}
            </div>
        </React.Fragment>
    )
}
export default React.memo(Modal);