import { create } from 'zustand'
import {devtools} from "zustand/middleware";
export const useCategory = create(devtools((set) => ({
    category: [],
    setCategories:(data)=>{
        set(()=>({category:data}));
    }
})))

