const INITIAL_STATE = {
    loading : false,
    data:[]
}
console.log('start - ',INITIAL_STATE.loading,INITIAL_STATE.data)

const FetchApiData = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case 'FETCH_USER_REQUEST':   //saga
            return{
                loading:true,
                ...state,
            }
        case 'FETCH_USER_SUCCESS':
            return{
                loading:false,
                data:action.payload,
                error: '',
            }    

        case 'FETCH_USER_FAILURE':
            return{
                loading:false,
                data:[],
                error:action.payload
            }    
    }
    return state
}

export default FetchApiData;