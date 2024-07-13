import {Link} from "react-router-dom";
import {Heart, ShoppingCart} from "lucide-react";
import {Button} from "@/components/ui/button.jsx";
import toast from "react-hot-toast";
import {useState} from "react";
import {useUser} from "@/store/userStore.js";
import {callApi} from "@/config/apiConfig.js";
import {useCart} from "@/store/cartStore.js";
import {useWishlist} from "@/store/wishlistStore.js";
const ProductCard = ({data})=>{
    const [isLoading, setIsLoading] = useState(false);
    const [wishLoading, setWishLoading] = useState(false)
    const userStore = useUser();
    const cartStore = useCart();
    const wishlistStore = useWishlist();
    const {addWishlist} = wishlistStore;
    const {cart, addToCart, getTotalAmount} = cartStore;
    const checkCard = (id)=>{
        return cart.some(item=>item.productId===id);
    }
    const addToWishlist = async(id)=>{
        try {
            if(userStore?.user===null){
                return toast.error("Signin for add to wishlist")
            }
            setWishLoading(true);
            const {data} = await callApi({url:"user/wishlist/add", method:"post", token:userStore.user.token, data:{
                productId:id
            }});
            setWishLoading(false);
            addWishlist(data);
            toast.success("Wishlist added successfully")
        }catch (e) {
            setWishLoading(false);
            toast.error(e?.response?.data?.message)
        }
    }
     const addCart = async(id)=>{
        try{
            if(userStore?.user===null){
                 return toast.error("Signin for add to cart");
            }
            setIsLoading(true);
            const cartData = {
                productId: id,
                quantity: 1
            }
            const {data} = await callApi({url:"user/cart/add", method:"post", data:cartData, token:userStore.user.token});
            addToCart(data);
            getTotalAmount()
            setIsLoading(false);
            toast.success("Product added in cart");
        }catch (e) {
            setIsLoading(false);
            toast.error(e?.message)
        }
    }
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
                        <span>
                            <span className="text-[#4b5966] font-bold text-[14px] mr-[7px]">Rs {data?.discountPrice}</span>
                            <span className="text-[14px] text-[#777] line-through">Rs {data?.price}</span>
                        </span>
                        <div className="flex flex-col gap-4 mt-4">
                            {
                                checkCard(data?.id)?(
                                    <Button className="text-[12px]"  disabled={true}>Added to Cart</Button>
                                ):(
                                    <Button className="text-[12px]" onClick={()=>addCart(data?.id)} disabled={isLoading}><ShoppingCart size={18} className="mr-3"/> Add to Cart</Button>
                                )
                            }
                            <Button className="text-[12px]" onClick={()=>addToWishlist(data?.id)} disabled={wishLoading}><Heart size={18} className="mr-3"/> Add to Wishlist</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;