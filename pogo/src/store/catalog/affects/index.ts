import { PayloadAction } from "@reduxjs/toolkit";
import { ICatalogState, Product } from "../catalog.interface";

export const setProducts = (state: ICatalogState, action: PayloadAction<Product[]>) => {
    state.products = action.payload
    return state 
}