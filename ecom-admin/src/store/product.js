import { create } from 'zustand'
import toast from "react-hot-toast";
import {callApi} from "@/config/apiconfig.js";
const initialState = {
    products:[],
    isLoading: false,
    product:null
}
export const useProduct = create((set) => ({
    ...initialState,
    addProduct: async (value,token)=>{
        try{
            set({...initialState, isLoading: true});
            console.log(value)
            const {data} = await callApi({url:"admin/product/add", data:value, method:"post", token})
            set({...initialState, products:initialState.products.push(data), isLoading:false})
            toast.success("Product added successfully");
            return data;
        }catch (e) {
            set({...initialState, isLoading:false})
            toast.error(e?.response?.data?.message)
        }
    },
    getProducts: async ()=>{

    },
    viewProduct: async ()=>{

    },
    deleteProduct: async ()=>{

    },
    updateProduct: async ()=>{

    }

}))
