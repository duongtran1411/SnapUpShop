import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";

const initialState ={
    searchProduct:[],
    searchProductsStatus:STATUS.IDLE
}

const searchSlice = createSlice({
    name:"search",
    initialState,
     reducers:{},
      extraReducers:(builder)=>{
        builder
        .addCase()
      }
})

export const fetchAsyncSearchProduct = createAsyncThunk('product-search/fetch', async(searchTerm)=>{
    const response = await fetch(`${BASE_URL}products/search?q=${searchTerm}`);
    const data = await response.json();
    return data.product;
})