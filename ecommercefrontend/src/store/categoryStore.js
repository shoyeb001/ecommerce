import { create } from 'zustand'

export const useCategory = create((set) => ({
    category: [],
    setCategories:(data)=>{
        set(()=>({category:data}));
    }
}))

