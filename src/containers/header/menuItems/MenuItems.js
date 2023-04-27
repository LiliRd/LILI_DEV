import React from 'react';
import './MenuItems.css'
import MenuItem from './menuItem/MenuItem';

const MenuItems=()=>{
    
    return (
      <ul className="MenuItems">
          <MenuItem link="/" >
              صفحه اصلی
          </MenuItem>

          <MenuItem link={{
              pathname:"/add-student",
              search:"?sor=name",
              hash:"#hash-the",
              state:{fromDashboard:true}
          }} >
              اضافه کردن دانش آموز
          </MenuItem>

          <MenuItem link="/transition">
                CSS Transition
          </MenuItem>

          <MenuItem link="/animation">
              CSS Animation
          </MenuItem>

          <MenuItem link="/mixTransition">
              CSS MixTransition
          </MenuItem>

      </ul>
    )
}
export default React.memo(MenuItems)