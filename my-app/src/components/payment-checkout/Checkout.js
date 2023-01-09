import React from 'react'
import "./checkout.css"

export default function Checkout() {
    return (
      <div>
      {/* <div className='checkout-page'>
         <div>
          <div className="coupan-code">
          <p>Add your promo/coupan here</p>
          <div className='input'>
            <input type="text" placeholder='Add Promo/Coupan' className='input-data' />
             <button className='input-btn'>Apply</button>
          </div>
         <p>Only onr promo/coupan code per order</p>
        </div>
    </div>
    <div>

        <div className='total-amount'>
        <h3>Order summary</h3>
        <div className="allData">

        <p>Order value</p>
        <p>Rs.699.00</p>
        </div>
        <div className='allData'>

        <p>Delivery fee/Picking fee</p>
        <p>Rs.159.00</p>
        </div>
       
        </div>
        <p>__________________________________</p>

        <div className='amount'>
            <h3>Total amount:</h3>
            <h5>Rs. 858.00</h5>
        </div>
       <div className='cards'>

        <li><img src="https://usa.visa.com/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg" alt="" /></li>
        <li><img src="https://imageio.forbes.com/blogs-images/steveolenski/files/2016/07/Mastercard_new_logo-1200x865.jpg?format=jpg&width=960" alt="" /></li>
        <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd_yjuA8BPTuHbw5S6vPoZidgjblLgPc4ATFlznDQ-&s" alt="" /></li>
        <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2h0cK0G76RFiD408WOH9Nnff0X9cNF94KW10P8elxxQpOC5WjkXg5Nj_b7L2AiEwsNTs&usqp=CAU" alt="" /></li>
        <li><img src="https://static.vecteezy.com/system/resources/thumbnails/007/501/900/small/wallet-saving-money-solid-line-icon-illustration-logo-template-suitable-for-many-purposes-vector.jpg" alt="" /></li>
        <li><img src="https://w7.pngwing.com/pngs/123/955/png-transparent-india-rupay-debit-card-bank-credit-card-india-text-trademark-logo.png" alt="" /></li>

       </div>
       <div style={{display:"flex",marginTop:"80px",justifyContent:"end"}}>

       <button style={{backgroundColor:"blue",color:"white",border:"none",borderRadius:"5px",padding:"8px"}}> placeOrder</button>
       </div>
        </div>


        

    </div>
    <div className='all-footer'>
         
    <div className='footercart'>
     <div>
     <span class="material-symbols-outlined">local_shipping</span>
     </div>
     <div>

     <p>Our deliveryService <br />
     Safe & contact less service <br />
     according to government <br />
     permsion</p>
     </div>
    </div>


    <div className='footercart'>
     <div>
     <span class="material-symbols-outlined">local_shipping</span>
     </div>
     <div>

     <p>Our deliveryService <br />
     Safe & contact less service <br />
     according to government <br />
     permsion</p>
     </div>
    </div>


    <div className='footercart'>
     <div>
     <span class="material-symbols-outlined">local_shipping</span>
     </div>
     <div>

     <p>Our deliveryService <br />
     Safe & contact less service <br />
     according to government <br />
     permsion</p>
     </div>
    </div>
   </div> */}


<body>
    <div id="main">
      <div class="headerdiv">
        <div class="header">
          <img
            src="https://www.ikea.com/us/en/static/ikea-logo.f7d9229f806b59ec64cb.svg"
            alt=""
          />
          <a href="homepage2.html">Continue Shopping</a>
        </div>
      </div>
      <div class="formhead">
        <h1>Checkout</h1>
        <div class="processbar">
          <div class="prc1"><p>Address</p></div>
          <div class="prc2"><p>Shipping Details and Payment</p></div>
        </div>
        <br />
        <hr />
      </div>
      <div id="paymain">
        <div class="cards1">
          <p class="cardheader">Select payment method</p>
          <div class="paycard">
            <span>
              <input type="radio" name="" id="cardradio" />
              Enter payment method
              <img
                src="https://img.shop.com/Image/local/images/cc/amex.jpg"
                alt=""
              />
              <img
                src="https://img.shop.com/Image/local/images/cc/discover.jpg"
                alt=""
              />
              <img
                src="https://img.shop.com/Image/local/images/cc/mastercard.png"
                alt=""
              />
              <img
                src="https://img.shop.com/Image/local/images/cc/visa.jpg"
                alt=""
              />
            </span>
          </div>
          <div class="bitpay">
            <span>
              <input type="radio" name="" id="cardradio" />
              Enter payment method
              <img
                src="https://bitpay.com/cdn/merchant-resources/bitpay-accepted-card-group.svg"
                alt=""
                width="250px"
              />
            </span>
          </div>
          <div class="sezzle">
            <a href="https://checkout.sezzle.com/welcome">
              <img
                src="https://img.shop.com/Image/local/images/cc/SezzlePaymentBtn_Small-purple.svg"
                alt=""
                width="250px"
              />
            </a>
          </div>
          <div class="paypal">
            <a href="https://www.paypal.com">
              <img
                src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-medium.png"
                alt=""
                width="220px"
              />
            </a>
          </div>
          <div class="paycredit">
            <a href="https://www.paypal.com">
              <img
                src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/ppcredit_MD_BNPOT_1x.png"
                alt=""
                width="220px"
              />
            </a>
          </div>
          <div class="mastervisa">
            <a href="https://www.paypal.com">
              <img
                src="https://src.mastercard.com/assets/img/btn/src_chk_btn_147x034px.svg?locale=en_us&paymentmethod=master,visa,discover,amex&checkoutid=a4a6w4v6h7cg0iaijxn0j1iaoelnus5936"
                alt=""
                width="220px"
              />
            </a>
          </div>
          <div class="cdtails">
            <div class="coupondiv">
              <p>Apply Coupon</p>
              <div class="couponbox">
                <label for="" class="couponlabel">
                  Coupon Code:
                  <input type="text" id="getcode" />
                </label>
                <button class="aplbtn" onclick="applycode()">Apply</button>
                <p id="couponmsg"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="orderval">
          <div class="ordersum">
            <h1>Order Summary</h1>
            <hr />
            <div class="itemvalue">
              <p class="left">Items Subtotal :</p>
              <br />
              <p class="totval"></p>
              <br />
              <p class="left">Tax total :</p>
              <br />
              <p class="right">00.00</p>
              <br />
              <p class="left">Shipping:</p>
              <br />
              <p class="right">Free</p>
              <br />
              <p id="copontrue"></p>
              <br />
              <p id="couponval"></p>
              <br />
           
              <p class="fintag">Order Total:</p>
              <p class="finval"></p>
              <hr class="green" />
              <div class="gettxt">
                <div class="alerttxt">
                  <input type="checkbox" name="" id="checkbox" />
                  <p class="right2">Get text alerts for this order
                  <br />
                  mobilePhone</p>
                </div>
                <hr />
                <p id="getmob"></p>
                <p class="left2">Message and data rates may apply.</p>
                <p class="left2">
                  Mobile number can be changed in your Profile.
                </p>
              </div>
              <div class="plcorder">
                <button onclick="window.location.href='pay.html'" id="plcbtn">
                  Place Order
                </button>
              </div>
              <div class="gettxt">
                <p>Let us know how we are doing <a href="">Send Feedback</a></p>
                <p class="tnk">Thanks!</p>
                <p>Your feedback is appreciated and reviewed by our team.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer id="footer">
        © 1997-2022 Market America, Inc. or its affiliates. All other designated
        trademarks, copyrights, and brands are the property of their respective
        owners. (famos-p19)
        Privacy Policy | Terms of Use | Advertising Disclosure | Return Policy |
        Shipping Information
      <section class="digimg">
      </section>
    </footer>
  </body>

</div>
  )
}