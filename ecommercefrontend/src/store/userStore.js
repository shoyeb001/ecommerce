import { create } from 'zustand'
import {devtools} from "zustand/middleware";
export const useUser = create(devtools((set) => ({
    user:null,

    setLoginUser:(data)=>{
        set((state)=>({user:data}))
    },

    logout:()=>{
        set((state)=>({user:null}))
    }
}),{name:"user store"}
))

