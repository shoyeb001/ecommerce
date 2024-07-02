import ProductImg from "@/assets/product.jpg"
import {Link} from "react-router-dom";
import {Heart, ShoppingCart, Star} from "lucide-react";
import {Button} from "@/components/ui/button.jsx";
const ProductCard = ({data})=>{
    return (
        <div className="h-full w-full">
            <div className="cursor-pointer flex flex-col overflow-hidden border-[1px] border-solid border-[#eee] rounded">
                <div className="transition-all duration-[0.3] delay-0 ease z-[11] relative w-full h-[244px] overflow-hidden">
                    <Link to={`/product/${data?.slug}`} className="relative block overflow-hidden w-full h-full">
                        <img src={data?.thumbnail} className="max-w-full transition-all duration-[0.3s] ease delay-0 object-contain w-full h-full"/>
                    </Link>
                </div>
                <div className="flex flex-col text-left border-t-[1px] h-[249px] border-solid border-[#eee] p-5">
                    <Link to="/shop" className="">
                        <h6 className="mb-[10px] font-normal text-[#999] text-[13px] leading-1 capitalize">{data?.category?.name}</h6>
                    </Link>
                    <h5 className="mb-[10px] text-[16px]">
                        <Link to={`/product/${data?.slug}`} className="block text-[14px]  leading-5 font-normal text-[#4b5966] capitalize hover:text-[#5caf90]"><p className="line-clamp-1">{data?.title}</p></Link>
                    </h5>
                    <div className="mt-[20px] flex flex-col">
                        {/*<span className="mb-[10px] relative flex">*/}
                        {/*    <Star size={16} fill={"#f27d0c"} color="#f27d0c"/> <Star size={16} fill={"#f27d0c"} color="#f27d0c"/> <Star size={16} fill={"#f27d0c"} color="#f27d0c"/> <Star size={16} fill={"#f27d0c"} color="#f27d0c"/> <Star size={16} strokeWidth={1}/>*/}
                        {/*    <span className="text-[14px] text-[#4b5966]">(4.0)</span>*/}
                        {/*</span>*/}
                        <span>
                            <span className="text-[#4b5966] font-bold text-[14px] mr-[7px]">Rs {data?.discountPrice}</span>
                            <span className="text-[14px] text-[#777] line-through">Rs {data?.price}</span>
                        </span>
                        {/*<div className="flex gap-12 mt-8">*/}
                        {/*    <Button className="text-[12px] flex-1"><ShoppingCart size={18}/></Button>*/}
                        {/*    <Button className="text-[12px] flex-1"><Heart size={18}/></Button>*/}
                        {/*</div>*/}
                        <div className="flex flex-col gap-4 mt-4">
                            <Button className="text-[12px]"><ShoppingCart size={18} className="mr-3"/> Add to Cart</Button>
                            <Button className="text-[12px]"><Heart size={18} className="mr-3"/> Add to Wishlist</Button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;