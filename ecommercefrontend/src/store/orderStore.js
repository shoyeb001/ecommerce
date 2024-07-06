import { create } from 'zustand'
import {devtools} from "zustand/middleware";

export const useOrder = create(devtools((set) => ({
    orders:[],
    order:{},
    addOrder: (data)=>{
        set((state)=>({...state, orders:[...state.orders, data]}))
    }
}),{name:"Order Store"}
))
