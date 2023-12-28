


import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleware, { thunk } from 'redux-thunk'
import ProfileReducer from "./profile-reducer"

let rootReducer = combineReducers({
    ProfileReducer
})




let store = createStore(rootReducer, applyMiddleware(thunk))




export default store