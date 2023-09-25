import React from 'react';
import '../styles/HeaderMenuWrapper.css'

const HeaderMenuWrapper = () => {
  return (
    <>
      <div class="pull-right mainHeaderCols">
            <div class="actionMenu">
                <span class="actionMenu">
                    <a>
                        <img src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" alt="country" height="30" width="30" class="countryIcon" />
                    </a>
                </span>
                <span class="actionMenu actionMenuInner" id="testHeaderCart">
                    <a href="/cart" class="cartIcon">
                        <i class="icon_bag" aria-hidden="true"></i>
                    </a>
                </span>
                <span class="actionMenu" id="testHeadWish">
                    <div>
                        <div class="">
                            <i class="icon_wishlist"></i>
                        </div>
                    </div>
                </span>
                <div class="actionMenu" style={{display: 'flex', alignItems: 'baseline', textAlign: 'right'}}>
                    <a href="#" id="loginLink" class="loginLink">Login</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeaderMenuWrapper
