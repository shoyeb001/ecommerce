import { create } from 'zustand'
import {callApi} from "@/config/apiConfig.js";
import toast from "react-hot-toast";
export const useProduct = create((set) => ({
    products:[],
    product:null,
    featuredProducts:[],
    filter:{
        category :[],
        priceRange:null,
        tags:[],
        sortBy:"latest",
        limit:10
    },
    isLoading:false,

    getFeatureProducts:async()=>{
        try{
            set((state)=>({...state, isLoading:true}));
            const {data} = await callApi({url:"product/featured", method:"get"});
            set((state)=>({...state, featuredProducts:data, isLoading:false}));
            return;
        }catch (e){
            return e;
        }
    },
    getProducts:async (data)=>{
       set((state)=>({...state, products:data}))
    }
}))

