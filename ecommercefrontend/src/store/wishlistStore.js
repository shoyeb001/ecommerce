import {create} from 'zustand'
import {devtools} from "zustand/middleware";

export const useWishlist = create(devtools((set) => ({
    wishlist:[],

    setWishlist:(data)=>{
        set((state)=>({wishlist:data}))
    },

    addWishlist:(data)=>{
        set((state)=>({wishlist: [...state.wishlist, data]}))
    },

    deleteWishlist:(id)=>{
        set((state)=>{
            return {
                ...state,
                wishlist: state.wishlist.filter((item)=>item.id!==id)
            }
        })
    },

    clearWishlist:()=>{
        set((state)=>({wishlist: []}))
    },
}),{name:"Wishlist Store"}
))