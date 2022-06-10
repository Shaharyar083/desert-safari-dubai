import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {desertSefariArray} from "../../utilites/desertSefariArray"
import {cityTourArray} from "../../utilites/cityTourArray"
import {DhowCruiseArray} from "../../utilites/DhowCruiseArray"
import {ticketAdvanureArray} from "../../utilites/tikectAdvanureArray"

const initialState = {
  isLoading:false,
  desertSefariArray,
  cityTourArray,
  DhowCruiseArray,
  ticketAdvanureArray
 
};


export const headerReducer = createSlice({
  name: "headerReducer",
  initialState: initialState,
  reducers: {
    handleChangeRegLog(state, action) {
      state.LoginRegisterRoute = action.payload;
    },
  
  },

 
});
// Action creators are generated for each case reducer function
export const { handleChangeRegLog} =
  headerReducer.actions;
export default headerReducer.reducer;
