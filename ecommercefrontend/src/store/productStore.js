import { create } from 'zustand'
import {callApi} from "@/config/apiConfig.js";
import toast from "react-hot-toast";
import {devtools} from "zustand/middleware";
export const useProduct = create(devtools((set) => ({
    products:[],
    product:null,
    featuredProducts:[],
    filter:{
        category :[],
        priceRange:200,
        tags:[],
        sortBy:"latest",
        limit:10,
        page:1,
    },
    total:0,
    isLoading:false,

    getFeatureProducts:async()=>{
        try{
            set((state)=>({...state, isLoading:true}));
            const {data} = await callApi({url:"product/featured", method:"get"});
            set((state)=>({...state, featuredProducts:data, isLoading:false}));
            return;
        }catch (e){
            return e;
        }
    },
    getProducts: (data)=>{
       set((state)=>({...state, products:data?.data, total: data?.total}))
    },

    setProductDetail:(data)=>{
      set((state)=>({...state, product:data}))
    },

    setProductReview:(data)=>{
      set((state)=>{
          const currentAvgRating = state.product.avgRating || 0;
          const currentTotalRating = state.product.totalReview || 0;
          const newRating = ((currentAvgRating * currentTotalRating) + data.rating) / (currentTotalRating + 1);
          return {
              ...state,
              product: {
                  ...state.product,
                  review: [...state.product.review, data],
                  avgRating: newRating,
                  totalReview: currentTotalRating+1
              }
          }
      })
    },

    setCategoryFilter: (data)=>{
        set((state)=>{
           return {
               ...state,
               filter:{
                   ...state.filter,
                   category: data
               }
           }
        })
    },

    setPriceFilter: (data)=>{
        set((state)=>{
            return{
                ...state,
                filter:{
                    ...state.filter,
                    priceRange:data[0],
                }
            }
        })
    },

    setTagsFilter: (data)=>{
        set((state)=>{
            return{
                ...state,
                filter:{
                    ...state.filter,
                    tags: data
                }
            }
        })
    },

    setSortFilter: (data)=>{
        set((state)=>{
            return{
                ...state,
                filter:{
                    ...state.filter,
                    sortBy:data
                }
            }
        })
    },

    setPagination:(data)=>{
        set((state)=>{
            console.log("hjh")
            return{
                ...state,
                filter:{
                    ...state.filter,
                    page: data
                }
            }
        })
    }
})))

