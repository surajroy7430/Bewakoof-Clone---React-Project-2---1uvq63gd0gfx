import React from 'react';
import '../../styles/Header_Components_Styles/Header_Women.css'
import { NavLink } from 'react-router-dom';

const Header_Women = () => {
  return (
    <div class="menuWrapper">
      <NavLink to="/women-clothing" class="menuSelectLink">
        <span>WOMEN</span>
      </NavLink>
    </div>
  )
}

export default Header_Women
