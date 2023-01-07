import React from 'react';
import { Link } from 'react-router-dom';

import "../footer/footer.css"


export default function Footer() {
  return (
    <div className="footer">
    <div className="footer__top">
        <div className="footer__info">
            <h3>Join IKEA Family</h3>
            <p>
                Bring your ideas to life 
                with special discounts, inspiration, 
                and lots of good things in store. 
                It's all free. <li>See more.</li>
            </p>
            
        </div>
        <div className="footer__infoList">
            <ul>
                <li className="footer__infoLi">
                    <h5>Customer service</h5>
                    <div className="footer__infoLinks">
                        <li>Customer service</li>
                        <li>My orders</li>
                        <li>Returns &amp; claims</li>
                        <li>Delivery</li>
                        <li>Stock information</li>
                        <li>Services</li>
                        <li>Recalls</li>
                        <li>Personal advice</li>
                    </div>
                </li>
                <li className="footer__infoLi">
                    <h5>About IKEA</h5>
                    <div className="footer__infoLinks">
                        <li>IKEA concept</li>
                        <li>This is IKEA</li>
                        <li>Sustainability</li>
                        <li>Ideas</li>
                        <li>Catalogue &amp; brochures</li>
                        <li>Campaigns</li>
                        <li>Working at IKEA</li>
                        <li>Press</li>
                        <li>IKEA news</li>
                    </div>
                </li>
                <li className="footer__infoLi">
                    <h5>Shopping at IKEA</h5>
                    <div className="footer__infoLinks">
                        <li>Opening hours</li>
                        <li>All stores</li>
                        <li>Offers</li>
                        <li>Restaurant</li>
                        <li>Swedish Food Market</li>
                        <li>IKEA App</li>
                        <li>Gift card</li>
                    </div>
                </li>
                <li className="footer__infoLi">
                    <h5>IKEA Family &amp; Business</h5>
                    <div className="footer__infoLinks">
                        <li>Log in</li>
                        <li>Sign up</li>
                        <li>About IKEA Family</li>
                        <li>Benefits</li>
                        <li>Events</li>
                        <li>IKEA for Business</li>
                    </div>
                </li>
            </ul>
        </div>
       
    </div>
    <div className="footer__social">
        <div className="footer__links">
        
          

            <div className="footer__socialIcons">
            <i class="fa-brands fa-facebook"></i>
            </div>

            <div className="footer__socialIcons">
            <i class="fa-brands fa-instagram"></i>
            </div>
           
            <div className="footer__socialIcons">
            <i class="fa-brands fa-youtube"></i>
            </div>
        </div>

        <div className="footer__buttons">
            <button>
        
                <p className="button__name"> Change country</p>
            </button>
            <button>
            <p className="button__name"> English</p>
               
            </button>
        </div>
        

    </div>
    <hr className="footer__line"/>
    <div className="footer__bottom">
        <p>&copy; Inter IKEA Systems B.V. 1999-2020</p>
        <div className="footer__bottomTags">
            <li>Privacy policy</li>
            <li>Cookie policy</li>
            <li>Cookie settings</li>
            <li>Terms and conditions</li>
            <li>User terms and conditions </li>
            <li>Responsible Disclosure Program</li>
        </div>
    </div>
</div>
  )
}
