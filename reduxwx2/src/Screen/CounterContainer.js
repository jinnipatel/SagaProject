import {connect} from 'react-redux'
import CounterComponent from '../components/CounterComponent'
import { increaseAction} from '../reducers/counter/action'
import { decreaseAction } from '../reducers/counter/action'

const mapStateToProps = (state) =>{
    // alert('state after changed :${JSON.stringify(state.counter)}');
    console.log('reducer--------',state)
    console.log('--------',state.counter)
    console.log('reducer counter--------',state.counter.counter)
    return{
        counter:state.counter
        // counter:state.counterReducers ? state.counterReducers : 0
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        //    onIncrement:(step) =>{
        //        dispatch(decreaseAction(step));
        //    },
        //    onDecrement:(step) =>{
        //        dispatch(increaseAction(step));
        //    }

        increaseCounter:(value) =>{
            dispatch(increaseAction(value))
        },
        decrementCounter:(value)=>{
            dispatch(decreaseAction(value))
        }
    }
}

const CounterContainer = connect(mapStateToProps,mapDispatchToProps)(CounterComponent)
export default CounterContainer;