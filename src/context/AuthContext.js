import React, {useReducer} from 'react';

export const AuthContext = React.createContext();

const authReducer=(state,action)=>{
    switch (action.type){
        case 'login' :
        {
            const userInfo={
                userName:action.payload,
                authenticatated:true
            };
            localStorage.setItem('user',JSON.stringify(userInfo))
            return {authenticatated:true}
        }

        case 'logout':{
            localStorage.removeItem('user');
            break;
        }

        default :
            return state;
    }
}
const AuthContextProvider = (props) => {
    const [authenticatated, dispatch] = useReducer(authReducer,false);

    return (
        <AuthContext.Provider value={{authenticatated,dispatch}}>
            {props.children}
        </AuthContext.Provider>

    )
}
export default AuthContextProvider;