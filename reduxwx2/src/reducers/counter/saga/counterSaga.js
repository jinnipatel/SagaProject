import {INCREASE_COUNTER, DECREASE_COUNTER} from '../action/actionType'
// import {delay} from 'redux-saga'
import {delay, put,takeEvery} from 'redux-saga/effects'

// export function* sayHello(){
//     console.log("Hello World!")
// }

function* increment(){
    yield delay(4000);
    // console.log("This is increment saga")
    yield put({ type: "INCREASE_COUNTER_A" })    // put same as dispatch
}

export function* watchIncrement(){
    yield takeEvery(INCREASE_COUNTER,increment)
}

function* decrement(){
    yield delay(4000);
    yield put({type:"DECREASE_COUMTER_A"})
    // console.log("This is Decrement saga ")
}

export function* watchDecrement(){
    yield takeEvery(DECREASE_COUNTER,decrement)
}