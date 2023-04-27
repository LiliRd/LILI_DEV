import React from 'react';
const WithClass =(WrapperComponent,className)=>{
    return props=>(
        <div className={className}>
            <WrapperComponent {...props}/>
        </div>
    )
}

export default WithClass;