import { createStore, combineReducers } from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import SignIn from './login'
import LogOut from './logout'
import TODO from './todo'

const reducers = combineReducers({ SignIn, LogOut, TODO })

const store= ()=> {
    return createStore(reducers, composeWithDevTools());
}

export default store();