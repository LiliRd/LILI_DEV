import React from 'react';
import {NavLink} from 'react-router-dom';
import './MenuItem.css';
const MenuItem=(props)=>{

    return (
        <li className="MenuItem">
           <NavLink to={props.link} exact activeClassName="active" activeStyle={{color:'green'}} >
               {props.children}
           </NavLink>
        </li>
    )
}

export default React.memo(MenuItem)