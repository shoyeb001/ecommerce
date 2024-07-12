import {Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
import {ShoppingCart} from "lucide-react";
import CartCard from "@/components/cart/CartCard.jsx";
import {useCart} from "@/store/cartStore.js";
import toast from "react-hot-toast";
import {useEffect, useState} from "react";
import {callApi} from "@/config/apiConfig.js";
import {useUser} from "@/store/userStore.js";
import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";

const CartSide = ()=>{
    const [isLoading, setIsLoading] = useState();
    const cartStore = useCart();
    const userStore = useUser();
    const {cart, setCart, totalAmount, gstAmount, getTotalAmount} = cartStore;
    const getCartData = async ()=>{
        try{
            setIsLoading(true);
            const {data} = await callApi({url:"user/cart/view", method:"get", token:userStore.user.token});
            setCart(data);
            getTotalAmount();
            setIsLoading(false);
        }catch (e){
            toast.error(e?.message);
        }
    }
    useEffect(() => {
        if(userStore.user){
            getCartData()
        }
    }, [userStore.user]);
    return(
        <Sheet>
            <SheetTrigger asChild>
                <div className="flex gap-2 relative">
                    <ShoppingCart size={25}/>
                    <div className="flex flex-col  font-body">
                        <span className="hidden md:block">Cart</span>
                    </div>
                    <div
                        className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 start-3 dark:border-gray-900">{cart?.length}
                    </div>
                </div>
            </SheetTrigger>
            <SheetContent className="font-body">
                <SheetHeader>
                    <SheetTitle className="text-[18px] text-[#4b5966]">My Cart</SheetTitle>
                </SheetHeader>
                {
                    cart.length>0 ? (
                        <>
                            <div className="flex flex-col gap-4 mt-4">
                                {
                                    cart?.map((item) => (
                                        <CartCard key={item?.id} data={item}/>
                                    ))
                                }
                            </div>
                            <SheetFooter>
                                <div
                                    className="mt-3 flex flex-col gap-3 border-t-[1px] border-solid border-[#eee] w-full">
                                    <div className="flex justify-between flex-wrap">
                                        <div className="font-medium text-[#777] ">Sub Total</div>
                                        <div className="font-bold text-[#777]">Rs: {totalAmount}</div>
                                    </div>
                                    <div className="flex justify-between flex-wrap">
                                        <div className="font-medium text-[#777] ">GST</div>
                                        <div className="font-bold text-[#777]">18%</div>
                                    </div>
                                    <div className="flex justify-between flex-wrap">
                                        <div className="font-medium text-[#777] ">Total Amount</div>
                                        <div className="font-bold text-[#777]">Rs: {gstAmount}</div>
                                    </div>
                                    <div className="flex justify-between flex-wrap gap-6">
                                        {/*<Button className="flex-1  hover:bg-[#4b5966]"><Link to="/cart">View Cart</Link></Button>*/}
                                        <Button className="flex-1 w-full bg-[#5caf90] hover:bg-[#4b5966]"><Link
                                            to="/checkout">Checkout</Link></Button>
                                    </div>
                                </div>
                            </SheetFooter>
                        </>
                    ) : (
                        <div className="flex flex-col h-full gap-2 items-center w-full p-4">
                            <h6>Cart Is Empty!</h6>
                            <p>Add some items in cart</p>
                            <Button><Link to="/shop">Shop Now</Link></Button>
                        </div>
                    )
                }

            </SheetContent>

        </Sheet>
    );
}
export default CartSide