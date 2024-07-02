import {useCategory} from "@/store/categoryStore.js";
import {Checkbox} from "@/components/ui/checkbox.jsx";
import {useProduct} from "@/store/productStore.js";
import {useEffect} from "react";

const ProductCategoryFilter = ()=>{
    const categoryStore = useCategory();
    const productStore = useProduct();
    const {setCategoryFilter, filter} = productStore;
    const handelCheckChange = (id)=>{
        console.log(id)
        if(filter.category.includes(id)){
            return setCategoryFilter(filter.category?.filter((catId)=>catId!==id))
        }else{
            return setCategoryFilter([...filter.category, id])
        }
    }

    return (
        <>
            <div className="flex flex-col gap-2 mt-4">

            {
                    categoryStore.category && categoryStore.category?.map((cat)=>(
                    <div className="flex items-center space-x-3" key={cat?.id}>
                        <Checkbox  checked={productStore.filter.category.includes(cat?.id)} onCheckedChange={()=>handelCheckChange(cat?.id)}/>
                        <label className="text-[#777] text-sm leading-3 capitalize cursor-pointer flex gap-2 items-center">
                            <img src={cat?.image} className="w-[25px]"/>
                            {cat?.name}</label>
                    </div>
                    ))
            }
            </div>

        </>
    )
}
export default ProductCategoryFilter