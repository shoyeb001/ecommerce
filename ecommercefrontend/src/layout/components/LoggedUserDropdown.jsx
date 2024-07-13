import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {Avatar, AvatarFallback, AvatarImage,} from "@/components/ui/avatar"
import {useUser} from "@/store/userStore.js";
import {callApi} from "@/config/apiConfig.js";
import toast from "react-hot-toast";
import {Link, useNavigate} from "react-router-dom";
import {useCart} from "@/store/cartStore.js";
import {useWishlist} from "@/store/wishlistStore.js";

const LoggedUserDropdown = ()=>{
    const userStore = useUser();
    const {user, logout} = userStore;
    const navigate = useNavigate();
    const cartStore = useCart();
    const wishlistStore = useWishlist();
    const logoutUser = async ()=>{
        try{
            await callApi({url:"user/logout", method:"get", token:user?.token});
            logout();
            localStorage.clear()
            cartStore.clearCart()
            wishlistStore.clearWishlist()
            navigate("/")
        }catch (e) {
            toast.error(e?.response?.data?.message)
        }
    }
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                 <AvatarImage src={user?.avatar} alt="User image" />
                    <AvatarFallback>{user?.firstName[0]}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                    <Link to="/account/my-profile">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={logoutUser}>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default LoggedUserDropdown;