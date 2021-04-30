import { INCREASE_COUNTER ,DECREASE_COUNTER,FETCH_USERS_REQUET,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from './actionType'


export const increaseAction = (value) =>{
    return{
          type:INCREASE_COUNTER,
          payload:value
    }
}
export const decreaseAction = (value) =>{
    return{
         type:DECREASE_COUNTER,
         payload:value
    }
}

// export const fetchUserRequest = (data) =>{
//     return{
//         type:FETCH_USERS_REQUET,
//         payload:data
//     }
// }
// export const fetchUserSuccess = (data) =>{
//     return{
//         type:FETCH_USERS_SUCCESS,
//         payload:data
//     }
// }
// export const fetchUserfailed = () =>{
//     return{
//         type:FETCH_USERS_FAILURE,
    
//     }

// }

