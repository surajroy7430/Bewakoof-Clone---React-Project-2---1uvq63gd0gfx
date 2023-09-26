import React from 'react';
import '../../styles/Header_Components_Styles/TopHeader.css'

const TopHeader = () => {
  return (
    <div class="topBar">
        <div class="pull-left">
            <a class="headerLinks" href="https://www.bewakoof.com/campaign/delights-coupons-discounts-offers-sale"> Offers</a>
            <a class="headerLinks" href="https://www.bewakoof.com/fanbook-testimonial-reviews"> Fanbook</a>
            <a class="headerLinks" href="https://www.bewakoof.com/campaign/apps">
                <i class="icon_mobile_covers mobileIcon"></i> 
                Download App
            </a>
            <a class="headerLinks" href="https://www.bewakoof.com/tribe"> TriBe Membership</a>
        </div>

        <div class="pull-right">
            <a class="headerLinks" href="https://www.bewakoof.com/contact-us"> Contact Us</a>
            <a class="headerLinks" href="https://www.bewakoof.com/myaccount/orders"> Track Order</a>
        </div>
    </div>
  )
}

export default TopHeader
