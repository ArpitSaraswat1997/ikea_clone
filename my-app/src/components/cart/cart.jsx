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

function Cart() {

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
            
        </div>
    )
}

export default Cart