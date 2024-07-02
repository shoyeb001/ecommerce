import {Slider} from "@/components/ui/slider.jsx";
import {useState} from "react";
import {useProduct} from "@/store/productStore.js";
const PriceFilter = ()=>{
    const productStore = useProduct()
    const {filter, setPriceFilter} =productStore;
   return(
       <div className="flex flex-col gap-4">
           <div className="flex justify-between py-3">
               <span className="font-medium text-[#777]">Min:0</span>
               <span className="font-medium text-[#777]">Max:{filter?.priceRange}</span>
           </div>
        <Slider
            defaultValue={[filter.priceRange]}
            max={2000}
            step={30}
            onValueChange={(i) => setPriceFilter(i)}
        />
    </div>
   )
}
export default PriceFilter