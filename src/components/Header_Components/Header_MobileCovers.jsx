import React from 'react';
import '../../styles/Header_Components_Styles/Header_MobileCovers.css';
import { NavLink } from 'react-router-dom';

const Header_MobileCovers = () => {
  return (
    <div class="menuWrapper">
      <NavLink to="/mobile-covers" class="menuSelectLink">
        <span>MOBILE COVERS</span>
      </NavLink>
    </div>
  )
}

export default Header_MobileCovers
