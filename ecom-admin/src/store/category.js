import { create } from 'zustand'
import {callApi} from "@/config/apiconfig.js";
import toast from "react-hot-toast";
const initialState = {
    categories:[],
    category:null,
    isLoading:false
}
export const useCategory = create((set) => ({
    ...initialState,
   getCategory:async ()=>{

   },
    viewCategories: async ()=>{
        try{
            set({...initialState, isLoading:true});
            const {data} = await callApi({method:"get", url:"admin/category/all"});
            set({...initialState, categories: data, isLoading: false});
            return data;
        }catch (e){
            return e;
        }
    },
    viewCategory: async ()=>{

    },
    addCategory: async (data, token)=>{
        try {
            set({...initialState, isLoading:true});
            await callApi({url:"admin/category/add", method:"post", token, data})
            set({...initialState, isLoading:false, categories: initialState.categories.push(data)});
            toast.success("category updated successfully");
        }catch (e) {
            set({...initialState, isLoading:false})
            toast.error(e?.response?.data?.message)
        }
    },
    updateCategory: async ()=>{

    },
    deleteCategory: async()=>{

    }
}))

