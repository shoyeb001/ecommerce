import {useCart} from "@/store/cartStore.js";
import CartCard from "@/components/cart/CartCard.jsx";
import VerticalProductCard from "@/components/product/VerticalProductCard.jsx";
const CheckoutProduct = ()=>{
    const cartStore = useCart();
    const {cart, totalAmount, gstAmount} = cartStore;
    return (
        <div className="w-[30%] border-[1px] border-solid border-[#eee] h-full">
            <div className="px-3 py-1">
                <h5 className="text-[18px] text-[#4b5966] font-semibold">Summary</h5>
                <div className="flex text-[15px] mt-3 text-[#777] justify-between">
                    <span>Sub-Total:</span>
                    <span className="font-semibold">Rs {totalAmount}</span>
                </div>
                <div className="flex text-[15px] mt-3 text-[#777] justify-between">
                    <span>GST:</span>
                    <span className="font-semibold">18%</span>
                </div>
                <div className="flex text-[15px] mt-3 text-[#777] justify-between border-t-[1px] border-solid border-[#eee]">
                    <span className="mt-3 text-[#4b5966] font-bold">Total Amount:</span>
                    <span className="font-semibold mt-3">Rs {gstAmount}</span>
                </div>
            </div>
            <div className="px-3 py-1 flex flex-col gap-4 mt-3 mb-3">
                {
                    cart?.map((item)=>(
                        // <CartCard data={item} key={item?.id}/>
                        <VerticalProductCard product={item.product} key={item?.id}/>
                    ))
                }
            </div>
        </div>
    )
}
export default CheckoutProduct