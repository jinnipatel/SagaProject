import {INCREASE_COUNTER,DECREASE_COUNTER} from '../action/actionType'

const INITIAL_STATE = {
    counter:0
}


const counterReducers = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case 'INCREASE_COUNTER_A':
            console.log('Enter INCREASE_COUNTER reducer', state.counter);
            return {counter:state.counter + 1}
            // console.log('Enter INCREASE_COUNTER reducer');
        case 'DECREASE_COUNTER_A':
            console.log('Enter DECREASE_COUNTER reducer',state.counter);
            return {counter:state.counter - 1} 
            // return {counter:state.counter - 1};

        default:
            return state;  
    }
}

export default counterReducers;