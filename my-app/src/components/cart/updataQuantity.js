

function UpdateArray(value){
    return function abc(dispatch,getState){
        console.log(value) 
        dispatch({
            type: 'update',
            payload: value
        })
    }
}

export default UpdateArray