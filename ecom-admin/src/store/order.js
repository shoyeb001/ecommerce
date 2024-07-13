import { create } from 'zustand'
import {devtools} from "zustand/middleware";

export const useOrder = create(devtools((set) => ({
    order: [],
    ordered:[],
    confirmed:[],
    shipped:[],
    delivered:[],

    setOrder:(data)=>{
        set((state)=>({...state, order:data}))
    },
    setOrdered:(data)=>{
        set((state)=>({...state, ordered:data}))
    },
    setShipped:(data)=>{
        set((state)=>({...state, shipped:data}))
    },
    setDelivered:(data)=>{
        set((state)=>({...state, delivered:data}))
    }
}),{name:"Order Status"}

))
