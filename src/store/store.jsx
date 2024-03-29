import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import createUserReducer from "./createUserSlice";
import authReducer from "./authSlice";

export default configureStore({
    reducer: {
        users: useReducer, 
        modal: createUserReducer,
        auth: authReducer
    }
})