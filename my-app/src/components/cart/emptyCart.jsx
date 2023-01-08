import { useNavigate } from "react-router-dom"

function EmptyCart(){
    const navigate = useNavigate()
    return(
        <div style={{textAlign:"center"}}>
            <img style = {{width:"200px",border:"100px",marginBottom:"30px"}} src = "https://order.ikea.com/in/en/checkout/static/media/ill-alien.cb42647f.svg"/>
            <p>Your cart is empty!</p>
            <p>Login to see what you already added</p>
            <button onClick={()=>{navigate("/products")}} style={{width:"300px",backgroundColor:"rgb(19, 80, 116)",color:"white",
                            fontSize:"14px",border:"none",padding:"10px 30px",
                            cursor:"pointer",borderRadius:"6px"}}>Browse our products</button>
        </div>
    )
}
export default EmptyCart