import "./cart.css"

import { RiDeleteBin6Line } from 'react-icons/ri';
import { useSelector } from "react-redux";
import AuthReducer from "../login-signup/AuthReducer/AuthReducer";

function CartProduct({del, price, name, detail, measurement, image, quantity,setq,id }) {
    
    let arr = []
    for (var i = 0; i < 100; i++) {
        arr.push(i);
    }
    return (
        <>
            <div className="Container">
                <div className="singleItem">
                    <div className="singleItem1">
                        <div>
                            <img width="135px" src={image} alt={measurement} />
                        </div>
                        <div>
                            <h5 style={{fontWeight:"bolder"}}>{name}</h5>
                            <p className="textSize">{detail}</p>
                            <p className="textSize">{measurement}</p> 
                        </div>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <h5 style={{fontWeight:"bolder"}}>Rs.{price * quantity}</h5>
                        <p>{quantity>1?"Rs."+price+"/pieces":null}</p>
                    </div>
                </div>
                <div className="input-btn">
                    <button onClick={()=>del(id)}><RiDeleteBin6Line/></button>
                    <select value={quantity} onChange={(e)=>{setq(e.target.value,id)}} >
                        {
                            arr.map((elem, i) => {
                                return (
                                    <option key={i} value={i + 1} >{i + 1}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>

        </>

    )
}

export default CartProduct