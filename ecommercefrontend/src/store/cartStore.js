import { create } from 'zustand'
import {devtools} from "zustand/middleware";

export const useCart = create(devtools((set,get) => ({
   cart:[],
   totalAmount:0,
   gstAmount:0,

   addToCart:(data)=>{
      set((state)=>({...state,cart:[...state.cart, data]}))
   },
   setCart:(data)=>{
      set((state)=>({...state, cart:data}));
   },
   updateQty:(data, id)=>{
      set((state)=>({
         ...state,
         cart: state.cart.map((item)=>{
            return item.id===id ? data : item
         })
      }))
   },

   getTotalAmount:()=>{
      const cart = get().cart;
      const totalAmount = cart.reduce((total, item) => {
         return total + (item.product.discountPrice * item.quantity);
      }, 0);
      const gst = totalAmount * 0.18;
      const gstAmount = totalAmount + gst;
      set((state)=>({...state, totalAmount:totalAmount.toFixed(2), gstAmount:gstAmount.toFixed(2)}));
   },

   deleteCart:(id)=>{
      set((state)=>{
         return {
            ...state,
            cart: state.cart.filter((item)=>item.id!==id)
         }
      })
   }
}),{name: "cart store"}
))