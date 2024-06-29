import { create } from 'zustand'
import toast from "react-hot-toast";
import {callApi} from "@/config/apiconfig.js";

export const useProduct = create((set) => ({
    products:[],
    isLoading: false,
    product:null,
    addProduct: async (value,token)=>{
        try{
            set((state)=>({...state, isLoading:true}));
            const {data} = await callApi({url:"admin/product/add", data:value, method:"post", token})
            set((state)=>({...state, isLoading:false, products:[...state.products, value]}));
            toast.success("Product added successfully");
            return data;
        }catch (e) {
            set((state)=>({...state, isLoading:false}))
            toast.error(e?.response?.data?.message)
        }
    },
    getProducts: async (token)=>{
        try{
            set((state)=>({...state, isLoading:true}));
            const {data} = await callApi({url:"admin/product/all", method:"get", token});
            set((state)=>({...state, isLoading:false, products: data}))
            return;
        }catch (e) {
           set((state)=>({...state, isLoading:false}))
            toast.error(e?.response?.data?.message)
        }
    },
    viewProduct: async ()=>{

    },
    deleteProduct: async ()=>{

    },
    updateProduct: async ()=>{

    }

}))
