import { configureStore } from '@reduxjs/toolkit'
import headerReducer from "../redux/reducers/headerReducer"


export const store = configureStore({
    reducer: {
        AllheaderFunctionality: headerReducer,
    },
})