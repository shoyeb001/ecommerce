import {create} from 'zustand'
import {devtools} from "zustand/middleware";

export const useOrder = create(devtools((set) => ({
    orders:[],
    order:{},
    addOrder: (data)=>{
        set((state)=>({...state, orders:[...state.orders, data]}))
    },
    setOrder: (data)=>{
        set((state)=>({...state, orders:data}))
    },
    setInvoice:(data)=>{
        set((state)=>({...state, order:data}))
    }
}),{name:"Order Store"}
))
