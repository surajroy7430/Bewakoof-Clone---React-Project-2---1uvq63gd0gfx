import React from 'react'
import '../../styles/Header_Components_Styles/Header_Men.css'
import { NavLink } from 'react-router-dom'

const Header_Men = () => {
  return (
    <div class="menuWrapper">
      <NavLink to="/men-clothing" class="menuSelectWrpr">
        <span class="menuSelect">MEN</span>
      </NavLink>
    </div>
  )
}

export default Header_Men
