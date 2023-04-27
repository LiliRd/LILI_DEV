import React,{useState} from 'react';
import './Animation.css';
import Button from '../UI/button/button';



const Animation=()=>{
    const [slidState,setSlideState]=useState(false);
    const [flipState,setFlipState]=useState(false);

    const onSlide=()=>{
        setSlideState(true);
        setFlipState(false);
    }
    const onFlip=()=>{
        setSlideState(false);
        setFlipState(true);
    }

    return (
        <div className={`box ${slidState ? 'slide' : null} ${flipState? 'flip':null}`}  >
            <h1>My Animation</h1>
            <h2>React js by css</h2>
            <div style={{display:'flex',flexFlow:'row',justifyContent:'center'}}>
                <Button btnType='danger' clicked={onSlide} >
                    Slide
                </Button>

                <Button btnType='success' clicked={onFlip} >
                    Flip
                </Button>

            </div>
        </div>
    )

}
export default Animation;