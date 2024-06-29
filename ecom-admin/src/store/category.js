import { create } from 'zustand'
import {callApi} from "@/config/apiconfig.js";
import toast from "react-hot-toast";
export const useCategory = create((set) => ({
   categories: [],
    category: {},
    isLoading:false,
   getCategory:async ()=>{

   },
    viewCategories: async ()=>{
        try{
            set((state)=>({...state, isLoading: true}));
            const {data} = await callApi({method:"get", url:"admin/category/all"});
            set((state)=>({...state, isLoading: false, categories: data}));
            return data;
        }catch (e){
            return e;
        }
    },
    viewCategory: async ()=>{

    },
    addCategory: async (data, token)=>{
        try {
            set((state)=>({...state, isLoading: true}));
            await callApi({url:"admin/category/add", method:"post", token, data})
            set((state)=> ({...state, categories:[...state.categories, data], isLoading:false}))
            toast.success("category updated successfully");
            return ;
        }catch (e) {
            set((state)=>({...state, isLoading: false}))
            return e;
        }
    },
    updateCategory: async ()=>{

    },
    deleteCategory: async()=>{

    }
}))

