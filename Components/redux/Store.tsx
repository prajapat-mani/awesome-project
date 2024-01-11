import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import Reducer from "./Reducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createStoreHook } from "react-redux";
// import logger, {createLogger} from "redux-logger"


const middleware= applyMiddleware(thunk)
const store =createStore(RootReducer,middleware)

export default store