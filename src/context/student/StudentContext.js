import React, {useReducer} from 'react';

export const StudentContext = React.createContext();

const studentReducer=(state,action)=>{
    switch (action.type){
        case 'fetch' :
        {
            state=[...action.payload];
        }
        case 'search':
        {
            state=[...action.payload];
        }
        case 'delete':
        {
            const newState=state.filter(s=>s.id!==action.payload);
            state=[...newState];
        }


        default :
            return state;
    }
}
const StudentContextProvider = (props) => {
    const [member, dispatch] = useReducer(studentReducer,false);

    return (
        <StudentContext.Provider value={{member,dispatch}}>
            {props.children}
        </StudentContext.Provider>

    )
}
export default StudentContextProvider;