
function ProductAction(value){
    return function abc(dispatch, getState){
        let avail = false
        for(var i=0;i<getState().singlePR.length;i++){
            if(value.id === getState().singlePR[i].id){
                avail = true
                break;
            }
        }
        if(!avail){
            dispatch({
                type: "pAction",
                payload: value
            })
        }
    }
}

export default ProductAction