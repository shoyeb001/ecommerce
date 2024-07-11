import ProductFilter from "@/pages/shop/components/ProductFilter.jsx";
import {useProduct} from "@/store/productStore.js";
import {
    Select,
    SelectContent, SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {sortByData} from "@/constant/sortByData.js";
import {callApi} from "@/config/apiConfig.js";
import toast from "react-hot-toast";
import {useEffect} from "react";
import ProductCard from "@/components/product/ProductCard.jsx";
import ProductPagination from "@/pages/shop/components/ProductPagination.jsx";

const ShopContainer = ()=>{
    const productStore = useProduct();
    const {filter,setSortFilter, getProducts, products} = productStore;
    const {category, priceRange, tags, sortBy, limit, page} = filter;
     const getShopProducts = async ()=>{
        try{
            const params = new URLSearchParams();
            if(category.length>0){
                params.append('category', category.join(","));
            }
            if(priceRange){
                params.append('priceRange', priceRange)
            }
            if(tags.length>0){
                params.append('tags', tags.join(","));
            }
            if(sortBy){
                params.append('sortBy', sortBy)
            }
            params.append("limit", "6");
            if(page){
                params.append("page",page);
            }
            const url= "product/all?"+params.toString();
            const {data} = await callApi({url:url, method:"get"})
            console.log(data)
            getProducts(data);
        }catch (e){
            toast.error(e?.message)
        }
    }

    useEffect(() => {
        getShopProducts();
    }, [sortBy, page]);

    return(
        <div className="mt-6">
            <div className="w-full flex gap-4 flex-col md:flex-row">
                <div className="md:w-[25%] w-full order-2 md:order-1">
                    <ProductFilter filter={getShopProducts}/>
                </div>
                <div className="md:w-[75%] w-full order-1 md:order-2">
                    <div className="flex justify-end items-end mb-6">
                        <Select onValueChange={(v)=> setSortFilter(v)}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Sort By" className="text-[#777]"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {
                                        sortByData?.map((item,index)=>(
                                            <SelectItem className="text-[#777]" value={item.value} key={index}>{item?.label}</SelectItem>
                                        ))
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        {
                           products && products?.map((item)=>(
                                <ProductCard data={item}/>
                            ))
                        }
                    </div>
                    <ProductPagination/>
                </div>
            </div>
        </div>
    )
}
export default ShopContainer;