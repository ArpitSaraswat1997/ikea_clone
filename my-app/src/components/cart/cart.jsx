import "./cart.css"
import { BsChevronDown } from 'react-icons/bs';
import { FiPrinter } from 'react-icons/fi';
import { useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "./singleCartProduct";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import UpdateArray from "./updataQuantity";
import EmptyCart from "./emptyCart";
import {TbTruckDelivery} from "react-icons/tb"
import {MdOutlineAdsClick} from "react-icons/md"
import {GrDeliver} from "react-icons/gr"
import { useNavigate } from "react-router-dom";


function Cart() {
    const isAuth = useSelector((data)=>{
        
        return data.AuthReducer.isAuth
    })
    localStorage.setItem("path","/cart")
    console.log(isAuth)
    let [input,setInput] = useState("")
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const[q,setq] = useState(1)
    const cartArray = useSelector((data)=>{
        console.log(data.singlePR)
        return data.singlePR
    })  
    useEffect(()=>{
        let a = 10
        console.log(a)
    },[dispatch])

    // let [quantity, setQuantity] = useState(1)

    function changeQuantity(value,id) {
        for(var i=0;i<cartArray.length;i++){
            if(cartArray[i].id=== id){
                cartArray[i].quantity = value
                break;
            }
        }
        dispatch(UpdateArray(cartArray))
        setq(prev=>prev+1)
    }

    function deleteItem(id){
        let nArray = cartArray.filter((elem)=>{
            return elem.id != id
        })
        console.log(id)
        dispatch(UpdateArray(nArray))
        setq(prev=>prev+1)
    }
    let totalPrice = 0;
    console.log(cartArray)
    return (
        <>
        {!isAuth?<EmptyCart/>:
        <div>
            <h3 style={{ textAlign: "center"}}> <span style={{textDecoration:"underline"}}>Shopping Cart</span>   <BsChevronDown /> <FiPrinter />  </h3>
            <div>
                {
                    cartArray.map((elem) =>
                    (
                        <CartProduct
                            key={elem.id}
                            price={elem.price}
                            name={elem.name}
                            detail={elem.details}
                            measurement={elem.measurement}
                            image={elem.image}
                            quantity={elem.quantity}
                            setq={changeQuantity}
                            del = {deleteItem}
                            id = {elem.id}
                        />
                    )
                    )
                }
            </div>
            {
                cartArray.length==0? <EmptyCart />:<div style={{padding:"30px 0px",borderBottom:"1px solid rgb(160, 159, 159)",width:"50%",margin:"auto"}} >
                <div className="subtotal">
                    {cartArray.map((elem) => {
                        totalPrice += elem.price * elem.quantity
                    })}
                    <p>Subtotal</p>
                    <p>Rs.{totalPrice}</p>
                </div>

            </div>
            }
            <div className="placeOrder">
                <div className="greenColor">
                    <div style={{display:"flex",gap:"25px"}}>
                        <span style={{fontSize:"24px"}}><TbTruckDelivery /> </span>
                        <h5 style={{fontWeight:"bolder"}}>   Delivery details will be 
                        calculated in the
                        next page, 
                        please enter the pincode below to continue.</h5>
                    </div>
                    
                </div>
                <h3 style={{textAlign:"center",fontWeight:"bolder",marginTop:"30px"}}>How would you like to receive your order?</h3>
                <div style={{display:"flex",justifyContent:"space-around",borderBottom:"1px solid black"}}>
                    <div>
                        <p style={{fontSize:"40px",marginLeft:"25px"}}><GrDeliver /></p>
                        <p style={{color:"blue"}}>Home Delivery</p>
                    </div>
                    <div>
                        <p style={{fontSize:"40px",marginLeft:"35px"}}><MdOutlineAdsClick /></p>
                        <p>Click and Colloec</p>
                    </div>
                </div>
                <div style={{borderTop:"1px solid black",marginTop:"20px"}}>
                    <p>
                        Enter a PIN code to see product availability and delivery options.
                    </p>
                    <input value={input} onChange={(e)=>setInput(e.target.value)} style={{width:"100%",padding:"5px 0",fontSize:"25px"}} type="text" ></input><br></br>
                    <button onClick={()=>{
                        if(input.length==6) navigate("/checkout")
                        else{
                            alert("please enter a valid pincode")
                            setInput("")
                        }
                        
                    }} style={{marginTop:"10px",backgroundColor:"rgb(35, 71, 179)",width:"40%",color:"white",
                             padding:"15px",fontSize:"16px",border:"none"  }}>Proceed</button>
                </div>
            </div>
            
        </div>
        }
        </>
    )
}

export default Cart