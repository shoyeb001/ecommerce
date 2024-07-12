import {CircleX} from "lucide-react";
import {useCallback, useState} from "react";
import {useUser} from "@/store/userStore.js";
import {useCart} from "@/store/cartStore.js";
import {callApi} from "@/config/apiConfig.js";
import toast from "react-hot-toast";
import {debounce} from "@/lib/debounce.js";

const CartCard = ({data})=>{
    const [quantity, setQuantity] = useState(data?.quantity);
    const userStore = useUser();
    const cartStore = useCart();
    const {cart, updateQty, getTotalAmount, deleteCart} = cartStore;

    const deleteCartItem = async(id)=>{
        try{
            await callApi({url:`user/cart/delete?cartId=${id}`, method:"delete", token:userStore.user.token});
            deleteCart(id)
            getTotalAmount()
            toast.success("Item deleted from cart");
        }catch (e) {
            toast.error(e?.message)
        }
    }
    const updateCart = async (productId, quantity, id) => {
        try {
            const response = await callApi({url:"user/cart/update", method:"put", token:userStore.user.token, data:{
                productId: productId, quantity:quantity, id:id
            }});
            console.log(response.data);
            updateQty(response.data, response.data.id);
            getTotalAmount();
        }catch (e) {
            toast.error(e?.message)
        }
    };
    const debounceCartUpdate =  useCallback(debounce(updateCart,500),[])

    const handelIncrement =  (productId, id)=>{
        setQuantity((prev)=>{
            const newQty = prev +1;
              debounceCartUpdate(productId, newQty, id);
            return newQty;
        })
    }

    const handelDecrement = (productId, id)=>{
        setQuantity((prev)=>{
            if(prev>1){
                const newQty = prev-1;
                  debounceCartUpdate(productId, newQty, id);
                return newQty;
            }
            return prev;
        })
    }

    return (
        <div className=" border-[1px] border-solid border-[#eee] rounded">
            <div className="p-2 flex w-full gap-2 relative">
                <div className="w-[30%]">
                    <img src={data?.product?.thumbnail} className="w-full object-contain"/>
                </div>
                <div className="w-[70%]">
                    <h6 className=" text-[15px] text-[#777] leading-4 mb-2 pr-3 line-clamp-2">{data?.product?.title}</h6>
                    <span className="font-semibold text-[16px] text-[#777] leading-4">Rs: {(data?.product?.discountPrice?.toFixed(2)) * data?.quantity}</span>
                    <div className="w-[100px] border-[1px] border-solid mt-3 px-3 flex justify-between">
                        <div className="cursor-pointer font-medium text-[#777]" onClick={()=>handelDecrement(data?.productId, data?.id)}>-</div>
                        <div className="font-semibold">{quantity}</div>
                        <div className="cursor-pointer font-medium text-[#777]" onClick={()=>handelIncrement(data?.productId, data?.id)}>+</div>
                    </div>
                </div>
                <span className="absolute top-1 right-3 cursor-pointer" onClick={()=>deleteCartItem(data?.id)}><CircleX color="#ff0000"/></span>
            </div>
        </div>
    );
}
export default CartCard;