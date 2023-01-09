// import React from 'react'
// import "./cardDetails.css"

// export default function CardsDetails() {
//   return (
//     <div>
//         <body>
//     <div id="head2">
       
//        </div>
//     <hr/>
//     <div id="med">
//         <div id="p3">
//             <h1 id="head2ing">Choose payment method</h1>
//             <br />
//             <p id="p4">Choose the payment method you prefer</p>
//         </div>
//         <div id="pic">
//             <img id="img1" src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/payment-icon.svg" alt=""/>
//         </div>
//     </div>
//     <h3 id="H3">Payment Method Options</h3>

//     <div id="main">
//         <div id="card">
//             <div id="cardDeatils">
//                 <div id="icon">
//                     <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/Credit_Debit_Card.svg" alt=""/>
//                 </div>
//                 <div id="cardP">
//                     <p id="cr">Credit/Debit Card</p>
//                     <p id="dr">Visa, Mastercard, Rupay & more</p>
//                 </div>
//                 <img id="img2" src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/dropdown-right-arrow.png" alt=""/>
              
//             </div>
        
//             <div id="cardssss">
//             <div id="cardss">
//                 <div id="icon1">
//                     <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/UPI.svg" alt=""/>
//                 </div>
//                 <div id="cardP1">
//                     <p id="cr1">UPI</p>
//                     <p id="dr1">Google Pay, PhonePe, Paytm & more</p>
//                 </div>
//             </div>
           
//             <div id="cardss1">
//                 <div id="icon2">
//                     <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/Netbanking.svg" alt=""/>
//                 </div>
//                 <div id="cardP2">
//                     <p id="cr2">NetBanking</p>
//                     <p id="dr2">Pay through your favourite bank</p>
//                 </div>
//             </div>

            
//             <div id="cardss2">
//                 <div id="icon3">
//                     <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/Snpl.svg" alt=""/>
//                 </div>
//                 <div id="cardP3">
//                     <p id="cr3">Shop now & Pay later</p>
//                     <p id="dr3">Zest money, Simpl & more</p>
//                 </div>
//             </div>

//             <div id="cardss3">
//                 <div id="icon4">
//                     <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/PaytmPaymentOption.svg" alt=""/>
//                 </div>
//                 <div id="cardP4">
//                     <p id="cr4">Paytm Wallet</p>
//                     <p id="dr4">Link your Paytm wallet and pay</p>
//                </div>
//             </div>

//             <div id="cardss4">
//                 <div id="icon5">
//                     <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/GiftCard.svg" alt=""/>
//                 </div>
//                 <div id="cardP5">
//                     <p id="cr5">Gift card</p>
//                     <p id="dr5">One card for all Nykaa apps</p>
//                </div>
//             </div>

//             <div id="cardss5">
//                 <div id="icon6">
//                     <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/EMI.svg" alt=""/>
//                 </div>
//                 <div id="cardP6">
//                     <p id="cr6">EMI</p>
//                     <p id="dr6">Easy installments</p>
//                </div>
//             </div>
          
//         </div>
          
//         </div>
//         <div id="cardsDetails">
//             <h3 id="head22">Credit/Debit Card</h3>
//             <hr id="line"/>
//             <div id="logos">
//                 <p id="p5">WE ACCEPT</p>
//                 <img id="img3" src="https://www.lyra.com/in/wp-content/uploads/sites/8/2020/03/card-schemes.png" alt=""/>
//             </div>

//             <form id="form" action="">
//                 <input id="cardNumber" type="text" placeholder="Card Number"/><br/>
//                 <input type="text" name="" id="expiry" placeholder="Expiry(MM/YY)"/>
//                 <input type="password" name="" id="cvv" placeholder="CVV"/>
//                 <div id="checked">
//                     <input type="checkbox" name="" id="check"/>
//                     <p id="p6">Save this card securely for future</p>
//                 </div>
//                 <input id="submit" type="submit" value="Pay"/>
                
//             </form>
    
//         </div>
    
    

//         <div id="bagDetails">
            
//             {/* <!-- --------------------------------------------------------------------------------------------- --> */}

//             <div class="sub-menu-wrap" id="subMenu">
//                 <div class="sub-menu">
//                     <div class="user-info">
                       
//                         <div id="fetchAddress">
//                             {/* <!-- <p id="i1">Animesh Kumar</p>
//                             <p id="i2">Barola Sector 49 NEAR-SSC PUBLIC SCHOOL,</p>
//                             <p id="i3">Uttar Pradesh</p>
//                             <p id="i4">Noida-201301</p>
//                             <p id="i5">7667694853</p>  --> */}
                            
//                         </div>
                       
                       
//                     </div>
                
//                 </div>
//               </div>

//             {/* <!-- ------------------------------------------------------------------------------------------------ --> */}

//             <div id="bag2" onclick="toggleMenus()">
//                 <h4 id="H6">Price Details <br/><span>You are saving ₹0</span></h4>
//                 <p id="p9"></p>
//                 <span>Rs.1000.00</span>
//             </div>



//             {/* <!-- --------------------------------------------------------------------------------------- --> */}

         
//             <div class="sub-menu-wrap1" id="subMenus">
//                 <div class="sub-menu">
//                     <div class="user-info">
//                         <div class="totalamnt">
//                             <p id="p11">Total Amount</p>
//                             <p id="p2p"></p>
//                         </div>

//                         <div class="shipping">
//                             <p id="p11">Shipping</p>
//                             <p id="p2p1">Free</p>
//                         </div>
//                         <hr/>
//                         <div class="pay">
//                             <h3 id="p12">You Pay</h3>
//                             <h3 id="hhh"></h3>
//                         </div>
//                         <div id="design">
//                             <img id="sign" src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/3Success.svg" alt=""/>
//                             <h4 id="yay">Yay! You will earn 549 Reward points</h4>
//                         </div>
                        
//                     </div>
                
//                 </div>
//               </div>



//             {/* <!-- ------------------------------------------------------------------------------------------ --> */}

//             <div id="bag3">
//                 <p id="p10">Buy authentic products. Pay securely.<br/> Easy returns and exchange</p>
//                 <img id="lock" src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/pay-secure-lock.png" alt=""/>
//             </div>

//         </div>
    
//     </div>

// </body>
//     </div>
//   )
// }
