import "./singleProductpage.css"
import { FaStar } from 'react-icons/fa';
import { FaStarHalf } from 'react-icons/fa';
import { BiStoreAlt } from 'react-icons/bi';
import { GrDeliver } from 'react-icons/gr';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import {useDispatch} from "react-redux"
import ProductAction from "./productAction";
import { useEffect, useState } from "react";
import Loading from "./loading";

function SingleProduct() {

    const dispatch = useDispatch()
    const [obj,setObj] = useState({
        mainImageUrl : "",
        contextualImageUrl: "",
        typeName: "",
        imageAlt : "",
        name: "",
        salesPrice: "",
    })
    const [loading,setLoading] = useState(true)
    let id = "s69481394"

    useEffect(()=>{
        fetch(`https://ik.onrender.com/productWindow/${id}`)
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            setLoading(false)
            setObj(data)
        })
    },[])


    function addToCart(){
        let value = {
            id: obj.id,
            image:obj.mainImageUrl,
            name:obj.name,
            price:Math.trunc(obj.salesPrice.numeral) * 100 - 1,
            quantity: 1,
            measurement:obj.itemMeasureReferenceText,
            details: obj.imageAlt
        }
        dispatch(ProductAction(value))
    }

    return (
        <>
        {loading?<Loading />:
        <div className="parent">
            <p style={{ color: "gray", fontSize: "14px" }}>Products {">"} Furniture {">"} {obj.typeName} {">"} {obj.imageAlt} </p>
            <div className="container">
                <div>
                    <div className="productImg">
                        <img src={obj.mainImageUrl} alt={obj.imageAlt} />
                        <img src={obj.contextualImageUrl} alt={obj.imageAlt} />
                    </div>
                    <div className="about">{obj.about}</div>
                </div>

                <div>
                    <h3 style={{ margin: "0px" }}>{obj.name}</h3>
                    <p style={{ marginTop: "5px", marginBottom: "5px" }}>{obj.typeName}</p>

                    <h3>Rs. <span style={{ fontSize: "30px", fontWeight: "bolder" }}>{obj.salesPrice.numeral * 100 - 1}</span></h3>
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
                    <button onClick={addToCart} className="addToCart" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><HiOutlineShoppingCart /> Add to Cart</button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header" className="siderRight">
                            {/* <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5> */}

                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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


        </div>}
        </>
    )
}

export default SingleProduct