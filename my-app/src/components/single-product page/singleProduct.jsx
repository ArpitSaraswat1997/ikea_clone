import "./singleProduct.css"
import { FaStar } from 'react-icons/fa';
import { FaStarHalf } from 'react-icons/fa';
import { BiStoreAlt } from 'react-icons/bi';
import { GrDeliver } from 'react-icons/gr';


function SingleProduct() {

  const obj = {
    "id": "s69481394",
    "pipUrl": "https://www.ikea.com/us/en/p/lidas-chair-white-sefast-black-s69481394/",
    "imageUrl": "https://www.ikea.com/us/en/images/products/lidas-chair-white-sefast-black__1106345_pe868684_s5.jpg",
    "imageAlt": "LIDÅS Chair, white/Sefast black",
    "quickFacts": [],
    "availability": [
      {
        "type2": "CASH_AND_CARRY",
        "status": "LOW_IN_STOCK",
        "prefix": "Running low at ",
        "store": "Atlanta, GA",
        "suffix": ""
      }
    ],
    "name": "LIDÅS",
    "typeName": "Chair",
    "itemMeasureReferenceText": "",
    "mainImageUrl": "https://www.ikea.com/us/en/images/products/lidas-chair-white-sefast-black__1106345_pe868684_s5.jpg",
    "mainImageAlt": "LIDÅS Chair, white/Sefast black",
    "contextualImageUrl": "https://www.ikea.com/us/en/images/products/lidas-chair-white-sefast-black__1128365_pe876568_s5.jpg",
    "itemNoGlobal": "69481394",
    "onlineSellable": true,
    "lastChance": false,
    "itemNo": "69481394",
    "itemType": "SPR",
    "salesPrice": {
      "currencyCode": "USD",
      "numeral": 55,
      "current": {
        "prefix": "$",
        "wholeNumber": "55",
        "separator": ".",
        "decimals": "00",
        "suffix": "",
        "isRegularCurrency": false
      },
      "isBreathTaking": false,
      "discount": "",
      "tag": "NONE"
    }
  }
  console.log(obj.imageUrl)
  return (
    <div className="parent">
      <p style={{color:"gray",fontSize:"14px"}}>Products {">"} Furniture {">"} {obj.typeName} {">"} {obj.imageAlt} </p>
      <div className="container">
        <div className="productImg">
            <img  src = {obj.imageUrl} alt={obj.imageAlt} />
            <img src = {obj.contextualImageUrl} alt={obj.imageAlt} />
        </div>
        <div>
          <h3 style={{margin:"0px"}}>{obj.name}</h3>
          <p style={{marginTop:"5px"}}>{obj.typeName}</p>
          
          <h3>Rs. <span style={{fontSize:"30px"}}>{obj.salesPrice.numeral*100-1}</span></h3>
          <p  style={{marginTop:"-15px",fontSize:"14px",color:"gray"}}>Price incl. of all taxes</p>
          <span>
            <div className="abc">
              <div>
              <FaStar/> 
            <FaStar/> 
            <FaStar/> 
            <FaStar/>
            <FaStarHalf/>
              </div>
            
              </div>
              <div>(142)</div>
            </span>
          <h4>How to get it</h4>
          <div className="checkin">
            <div><p style={{fontSize:"30px",marginLeft:"20px"}} ><BiStoreAlt/></p></div>
            <div><p style={{marginTop:"10px"}}>Check in-store stock</p></div>
          </div>
          <div className="pinCheck">
            <input type="text" placeholder="Enter pin code" />
            <button >Check</button>
          </div>
          <div className = "delivey">
            <div><p style={{fontSize:"25px"}} ><GrDeliver/></p></div>
            <div><p style={{marginTop:"10px"}}>Please enter pin code to check home delivery availability.</p></div>
          </div>
          {/* <p><span></span> Check in-store stock</p> */}
            
            
        </div>
      </div>

    </div>
  )
}

export default SingleProduct