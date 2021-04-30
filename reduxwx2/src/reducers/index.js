 import {combineReducers} from 'redux'
 import counterReducers from './counter/reducers/counterReducers'
import FetchApiData from './FetchAPI/reducers';

 const allReducers = combineReducers({
     counter:counterReducers,
     UserApi : FetchApiData,

 })

 export default allReducers;



                                                                                                  