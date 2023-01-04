import "./singleProductpage.css"
import { FaStar } from 'react-icons/fa';
import { FaStarHalf } from 'react-icons/fa';
import { BiStoreAlt } from 'react-icons/bi';
import { GrDeliver } from 'react-icons/gr';
import { HiOutlineShoppingCart } from 'react-icons/hi';


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
            <p style={{ color: "gray", fontSize: "14px" }}>Products {">"} Furniture {">"} {obj.typeName} {">"} {obj.imageAlt} </p>
            <div className="container">
                <div className="productImg">
                    <img src={obj.imageUrl} alt={obj.imageAlt} />
                    <img src={obj.contextualImageUrl} alt={obj.imageAlt} />
                </div>
                <div>
                    <h3 style={{ margin: "0px" }}>{obj.name}</h3>
                    <p style={{ marginTop: "5px",marginBottom:"5px" }}>{obj.typeName}</p>

                    <h3>Rs. <span style={{ fontSize: "30px",fontWeight:"bolder" }}>{obj.salesPrice.numeral * 100 - 1}</span></h3>
                    <p style={{ marginTop: "-10px", fontSize: "13px", color: "rgb(94, 94, 94)" }}>Price incl. of all taxes</p>
                    <p style={{ marginTop: "-10px", fontSize: "13px", color: "rgb(94, 94, 94)gray" }}>Price valid Dec 15 - Jan 15 or while supply lasts</p>
                    <span>
                        <div className="abc">
                            <p>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                            </p>
                            <p style={{ fontSize: "13px" }}>(142)</p>
                        </div>
                    </span>
                    <h4>How to get it</h4>
                    <div className="checkin">
                        <div><p style={{ fontSize: "20px", marginLeft: "20px" }} ><BiStoreAlt /></p></div>
                        <div><p style={{ marginTop: "0px" }}>Check in-store stock</p></div>
                    </div>
                    <div className="pinCheck">
                        <input type="text" placeholder="Enter pin code" />
                        <button >Check</button>
                    </div>
                    <div className="delivey">
                        <div><p style={{ fontSize: "25px" }} ><GrDeliver /></p></div>
                        <div><p style={{ marginTop: "10px", fontSize: "14px", color: "rgb(109, 106, 106)" }}>Please enter pin code to check home delivery availability.</p></div>
                    </div>
                    {/* Slidebar Using Bootstrap */}
                    <button className="addToCart"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><HiOutlineShoppingCart /> Add to Cart</button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header" className="siderRight">
                            {/* <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5> */}
                            
                            <button  type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            <div className="sidebarText">
                                <h2>{obj.name}</h2>
                                <h4>was added to your shopping bag</h4>
                                <a href="">continue to bag</a>
                            </div>
                        </div>
                        <div class="offcanvas-body">
                           
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleProduct