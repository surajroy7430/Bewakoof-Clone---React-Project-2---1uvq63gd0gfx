import React from 'react';
import '../../styles/Header_Components_Styles/HeaderMenuWrapper.css'
import {ReactComponent as ShoppingBag} from '../../assets/shoppingBag.svg';
import {ReactComponent as WishList} from '../../assets/wishlist.svg'

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
                        {/* <ShoppingBag className='icon_bag' /> */}
                        <i className='icon_bag'></i>
                    </a>
                </span>
                <span class="actionMenu" id="testHeadWish">
                    <a class="">
                        {/* <WishList className='icon_wishlist' /> */}
                        <i className='icon_wishlist'></i>
                    </a>
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
