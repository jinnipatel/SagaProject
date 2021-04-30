export const fetchUserRequest = ()=>{
    return {
        type:'FETCH_USER_REQUEST',
    }
}

export const fetchUserSuccess = () =>{
    return{
        type:"FETCH_USER_SUCCESS",
        payload:user,
    }
}

export const fetchUserfailed =()=>{
    return{
        type:'FETCH_USER_FAILURE',
        payload:error,
    }
}