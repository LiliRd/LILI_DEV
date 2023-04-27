import React,{useState} from 'react';
import './Animation.css';
import Button from '../UI/button/button';

const styles={
    transaction:'all 1s ease-out'
}

const Transition=()=>{
    const [opacityState,setOpacityState]=useState(1);
    const [scaleState,setScaleState]=useState(1);

    const onHide=()=>{
        setOpacityState(0);
    }
    const onScale=()=>{
        setScaleState(scaleState>1?1:1.2);
    }

    return (
        <div className="box" style={{...styles,opacity: opacityState,transform:`scale(${scaleState})`}} >
            <h1>My Animation</h1>
            <h2>React js by css</h2>
            <div style={{display:'flex',flexFlow:'row',justifyContent:'center'}}>
                <Button btnType='danger' clicked={onHide} >
                    hide
                </Button>

                <Button btnType='success' clicked={onScale} >
                     scale
                </Button>

            </div>
        </div>
    )

}
export default Transition;