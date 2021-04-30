import {delay} from 'redux-saga'
import {all} from 'redux-saga/effects'
import fetchUserData from '../reducers/FetchAPI/saga'
import {sayHello, watchDecrement, watchIncrement} from '../reducers/counter/saga/counterSaga'

export default function* rootSaga(){
    yield all([
        sayHello,
        watchIncrement(),
        watchDecrement(),
        fetchUserData()

    ])

}