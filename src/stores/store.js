import {createStore} from 'redux'
import nameReducer from '../reducers/nameReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(nameReducer, composeWithDevTools())

export default store