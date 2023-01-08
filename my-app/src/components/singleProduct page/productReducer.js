const Initial_value = JSON.parse(localStorage.getItem("cartItem")) || []
    // {
    //     id: "",
    //     image:"",
    //     name:"",
    //     price:"",
    //     quantity: 1,
    //     measurement:"",
    //     details: "",
    // }


function ProductRed(state = Initial_value, action){
    if(action.type === "pAction"){
        state.push(action.payload)
        localStorage.setItem("cartItem",JSON.stringify(state))
    } 
    else if(action.type === 'update'){
        state = action.payload
        localStorage.setItem("cartItem",JSON.stringify(state))
    }
    
    return state
}

export default ProductRed