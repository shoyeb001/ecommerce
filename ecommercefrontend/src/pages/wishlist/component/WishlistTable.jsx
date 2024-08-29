import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {Button} from "@/components/ui/button.jsx";
import toast from "react-hot-toast";
import {callApi} from "@/config/apiConfig.js";
import {useUser} from "@/store/userStore.js";
import {useWishlist} from "@/store/wishlistStore.js";
import dateFormat from "@/lib/dateFormat.js";
import {CircleX, ShoppingCart} from 'lucide-react';
import {useEffect} from "react";
import {useCart} from "@/store/cartStore.js";

const WishlistTable = ()=>{
    const userStore = useUser();
    const wishlistStore = useWishlist();
    const {wishlist, deleteWishlist, setWishlist} = wishlistStore;
    const cartStore = useCart();
    const {cart, addToCart, getTotalAmount} = cartStore;
    const checkCard = (id)=>{
        return cart.some(item=>item.productId===id);
    }
    const addCart = async(id)=>{
        try{
            if(userStore?.user===null){
                return toast.error("Signin for add to cart");
            }
            const cartData = {
                productId: id,
                quantity: 1
            }
            const {data} = await callApi({url:"user/cart/add", method:"post", data:cartData, token:userStore.user.token});
            addToCart(data);
            getTotalAmount()
            toast.success("Product added in cart");
        }catch (e) {
            toast.error(e?.response?.data?.message)
        }
    }
    const deleteWishlistItem = async (id)=>{
        try{
            await callApi({url:`user/wishlist/delete?wishlistId=${id}`, method:"delete", token:userStore.token});
            deleteWishlist(id)
            toast.success("Item removed from wishlist");
        }catch (e) {
            toast.error("Error in delete")
        }
    }
    const getWishlists = async ()=>{
        try{
            const {data} = await callApi({url:"user/wishlist/view", method:"get", token:userStore.token});
            setWishlist(data);
        }catch (e) {
            toast.error(e?.reserved?.data?.message)
        }
    }
    useEffect(()=>{
        getWishlists();
    },[])
    return(
        <div className="mt-8">
            <Table>
                {wishlist?.length<=0 && <TableCaption>No Product in wishlist</TableCaption>}
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold">ID</TableHead>
                        <TableHead className="font-bold">Image</TableHead>
                        <TableHead className="font-bold">Name</TableHead>
                        <TableHead className="font-bold">Date</TableHead>
                        <TableHead className="font-bold">Price</TableHead>
                        <TableHead className="font-bold">Status</TableHead>
                        <TableHead className="font-bold text-center">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        wishlist?.map((item, index)=>(
                            <TableRow key={index}>
                                <TableCell className="font-medium">#{index+1}</TableCell>
                                <TableCell>
                                    <img src={item?.product?.thumbnail} className="w-[60px] h-[60px] object-contain"/>
                                </TableCell>
                                <TableCell>{item?.product?.title}</TableCell>
                                <TableCell>{dateFormat(item?.product?.createdAt)}</TableCell>
                                <TableCell>Rs {item?.product?.discountPrice.toFixed(2)}</TableCell>
                                <TableCell>Available</TableCell>
                                <TableCell className='flex justify-center gap-4 mt-3 items-center'>
                                    <Button variant="outline" disabled={checkCard(item?.product?.id)} onClick={()=>addCart(item?.product?.id)}><ShoppingCart size={15}/></Button>
                                    <Button variant="outline" onClick={()=>deleteWishlistItem(item?.id)}><CircleX size={15}/></Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
        </div>
    )
}
export default WishlistTable;