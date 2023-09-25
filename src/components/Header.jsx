import React from 'react'
import '../styles/Header.css'
import Header_Men from './Header_Men'
import HeaderMenuWrapper from './HeaderMenuWrapper'
import SearchWrapper from './SearchWrapper'
import Header_Women from './Header_Women'
import Header_MobileCovers from './Header_MobileCovers'
import TopHeader from './TopHeader'

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
                            <Header_Men />
                            <Header_Women />
                            <Header_MobileCovers />
                        </div>
                    </div>

                    <div className='col-xs-5 mainHeaderCols searchMyAccount'>
                        <HeaderMenuWrapper />
                        <SearchWrapper />
                    </div>
                </>
            </div>
        </div>
    </header>
  )
}

export default Header
