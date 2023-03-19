import "./checkOut1.css"
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";

function Checkout1() {
    let navigate = useNavigate()
    let data = useSelector((arr)=>{
        console.log(arr.singlePR)
        return arr.singlePR
    })
    let total = 0;
    for(var i=0;i<data.length;i++){
        total += data[i].price*data[i].quantity;
    }

    return (
        <div className="checkoutContainer">
            <p>Delivey Information</p>
            <div className="checkoutParent">
                <form>
                    <h4 class="mb-3">Delivery Address</h4>
                    <div class="name">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">First Name</label>
                            <input type="text" class="form-control first_name" id="exampleFormControlInput1"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label ">Last Name</label>
                            <input type="text" class="form-control second_name" id="exampleFormControlInput1"/>
                        </div>

                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Full Name for Delivery Address</label>
                        <input type="text" class="form-control full_name" id="exampleFormControlInput1"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Address Line 1</label>
                        <input type="text" class="form-control addr" id="exampleFormControlInput1"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Address Line 2 (optional)</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"/>
                    </div>
                    <div class="name">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">City</label>
                            <input type="text" class="form-control city" id="exampleFormControlInput1"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">State</label>
                            <select class="form-select state" aria-label="Default select example">
                                <option selected>-----</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>


                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Zip</label>
                            <input type="number" class="form-control zip" id="exampleFormControlInput1"/>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone(optional)</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1"/>
                    </div>
                    <div class="mb-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label chk" for="flexCheckDefault">
                            Receive SMS text message updates on my orders
                        </label>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email (We require your email to send
                            you receipts and order updates)</label>
                        <input type="email" class="form-control email" id="exampleFormControlInput1"/>
                    </div>
                    <hr/>
                    <div class="mb-3">
                        <div class="name mb-5">
                            <label for="">TOTAL :Rs.{total}</label>
                            {/* <strong class="totalPrice">PRICE</class= /> */}
                        </div>
                        <button  onClick={()=>{navigate("/checkout2")}} class="btn btn-primary next" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">Next</button>
                    </div>
                </form>
                <div>
                    <h2 style={{textAlign:"center"}}>Total Items: {data.length}</h2>
                    {
                        data.map((elem)=>{
                            return (
                                <div  className = "checkoutList">
                                    <div>
                                        <img width="120px" src = {elem.image}  alt = {elem.name} />
                                    </div>
                                    <div>
                                        <h5>{elem.name}</h5>
                                        <p>Rs.{elem.price}</p>
                                        
                                    </div>
                                    <div style={{textAlign:"end"}}>
                                        <p>quantity : <span style={{fontWeight:"bolder"}}>{elem.quantity}</span> </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div style={{width:"60%",margin:"auto",padding:"20px ",borderBottom:"1 px solid rgb(193, 191, 191)",display:"flex",justifyContent:"space-between"}}>
                        <h4>Subtotal: </h4>
                        <h4>{total}</h4>
                    </div>
                </div>
            </div>
        </div>
     )
}

            export default Checkout1;