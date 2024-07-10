import { create } from 'zustand'
import {devtools} from "zustand/middleware";
export const useUser = create(devtools((set) => ({
    user:null,
    token: localStorage.getItem("token") || null,
    setLoginUser:(data)=>{
        set((state)=>({...state,user:data}))
    },
    updateUser:(data)=>{
        set((state)=>({...state,user:{...state.user, ...data}}))
    },
    logout:()=>{
        set((state)=>({token:null,user:null}))
    }
}),{name:"user store"}
))

