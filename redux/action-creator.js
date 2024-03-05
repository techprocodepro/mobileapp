export const addAmount = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type:'add',
            payload: amount
        })
    }
}

export const subAmount = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type:'sub',
            payload: amount
        })
    }
}