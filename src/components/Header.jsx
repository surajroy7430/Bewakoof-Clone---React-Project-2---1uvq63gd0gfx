import React from 'react'
import '../styles/Header.css'
import Header_Men from './Header_Components/Header_Men'
import HeaderMenuWrapper from './Header_Components/HeaderMenuWrapper'
import SearchWrapper from './Header_Components/SearchWrapper'
import Header_Women from './Header_Components/Header_Women'
import Header_MobileCovers from './Header_Components/Header_MobileCovers'
import TopHeader from './Header_Components/TopHeader'

const Header = () => {
  return (
    <header className='headerDivWrapper'>
        <div className='topBarWrapper'>
            <TopHeader />
        </div>
        <div className="mainHeaderWrapper" >
            <div className='mainHeader row'>
                <>
                    <div class="col-xs-2 bewakoofLogoDiv">
                        <a href="/">
                            <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="bewakoof_logo" title="Bewakoof.com" /> 
                        </a>
                    </div>
                    <div className='col-xs-5 dropDownWrapper'>
                        <div className='mainHeaderCols'>
                            {/* <Header_Men /> */}
                            {/* <Header_Women /> */}
                            {/* <Header_MobileCovers /> */}
                        </div>
                    </div>

                    <div className='col-xs-5 mainHeaderCols searchMyAccount'>
                        <HeaderMenuWrapper />
                        {/* <SearchWrapper /> */}
                    </div>
                </>
            </div>
        </div>
    </header>
  )
}

export default Header
