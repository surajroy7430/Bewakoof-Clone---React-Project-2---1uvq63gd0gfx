import React from 'react'
// import Header_Men from './Header_Men'
import HeaderMenuWrapper from './HeaderMenuWrapper'
import SearchWrapper from './SearchWrapper'

const Header = () => {
  return (
    <div>
        <div class="bewakoofLogoDiv">
            <a href="/">
                <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="bewakoof_logo" title="Bewakoof.com" /> 
            </a>
        </div>
        <div className='dropDownWrapper'>
            <div className='mainHeaderCols'>
                {/* <Header_Men /> */}
            </div>
        </div>

        <div className='mainHeaderCols searchMyAccount'>
            <SearchWrapper />
            <HeaderMenuWrapper />
        </div>
    </div>
  )
}

export default Header
