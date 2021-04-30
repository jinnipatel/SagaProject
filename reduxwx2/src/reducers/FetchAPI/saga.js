import {delay,takeLatest,takeEvery,put,call} from 'redux-saga/effects'
import axios from 'axios';

//Worker function 
function* fetchUserRequest(action) {
    try {
        const apiConfig ={
            method:'get',
            url:'https://jsonplaceholder.typicode.com/users'
        };
        const resp = yield call(axios,apiConfig)
        console.log("user data" , resp.data) 
        yield put({type:'FETCH_USER_SUCCESS',payload:resp.data})  //same as disptch
        
    } catch (e) {
        console.log(e)
        yield put({type:'FETCH_USER_FAILURE'})
    }

}

// watcher function
function* fetchUserData(){
    yield takeLatest('FETCH_USER_REQUEST',fetchUserRequest)
}

export default fetchUserData;


