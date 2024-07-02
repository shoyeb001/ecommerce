import Image from "@/assets/product.jpg"
import {Heart, Star} from "lucide-react";
import {Button} from "@/components/ui/button.jsx";
import DetailsTab from "@/pages/product/components/DetailsTab.jsx";
import {useProduct} from "@/store/productStore.js";
const DetailContainer = ()=>{
    const productStore = useProduct();
    const {product} = productStore;
    return (
        <div className="mt-6">
            <div className="flex gap-5 justify-between">
                <div className="w-full h-[400px]">
                    <img src={Image} className="w-full h-full object-contain"/>
                </div>
                <div className="w-full">
                    <p className="text-[14px] text-[#777]">{product?.category?.name}</p>
                    <h2 className="text-2xl font-medium text-[#4b5966] mt-3">{product?.title}</h2>
                    <div className="flex gap-1 mt-3 items-center">
                        {
                            [...Array(5)].map((_,index)=>(
                                <Star stroke={(product?.avgRating)>index ? "#f27d0c": "#777"} size={14} fill={(product?.avgRating)>index ? "#f27d0c": "#fff"} />
                            ))
                        }

                        <span className="text-[#777]">| {product?.totalReview} Ratings</span>
                    </div>
                    <div className="flex justify-between mt-3">
                        <h6 className="text-2xl font-bold">Rs: {product?.discountPrice.toFixed(2)}</h6>
                        <h6 className="text-2xl font-bold text-[#777] line-through">MRP: {product?.price.toFixed(2)}</h6>
                    </div>
                    <p className="text-[14px] text-[#777] mt-6 leading-6 text-justify">{product?.description}</p>
                    <div className="flex gap-3 mt-[50px]">
                        <div className="w-[120px] border-[1px] border-solid py-2 px-3 flex justify-between">
                            <div className="cursor-pointer font-medium text-[#777]">-</div>
                            <div className="font-bold">1</div>
                            <div className="cursor-pointer font-medium text-[#777]">+</div>
                        </div>
                        <Button size="lg" className="hover:bg-[#5caf90]">Add to Cart</Button>
                        <Button variant="secondary" className="hover:bg-[#5caf90] hover:text-[#fff]"><Heart size={20}/></Button>
                    </div>
                </div>
            </div>
            <div className="mt-4 w-full">
                <DetailsTab/>
            </div>
        </div>
    )
}
export default DetailContainer