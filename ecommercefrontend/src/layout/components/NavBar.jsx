import Logo from "@/assets/logo.png"
import {Heart} from "lucide-react";
import {Link} from "react-router-dom";
import {useUser} from "@/store/userStore.js";
import LoggedUserDropdown from "@/layout/components/LoggedUserDropdown.jsx";
import UnloggedUserDownload from "@/layout/components/UnloggedUserDownload.jsx";
import CartSide from "@/components/cart/CartSide.jsx";
import {useWishlist} from "@/store/wishlistStore.js";
import MobileSidebar from "@/layout/components/MobileSidebar.jsx";
import SearchBar from "@/layout/components/SearchBar.jsx";

const Navbar = () =>{
    const userStore = useUser();
    const wishlistStore = useWishlist()
    const {user} = userStore;

    return(
        <div className="flex gap-8 py-3 w-[85%] m-auto">
            <div className="md:hidden w-2/6">
                <MobileSidebar/>
            </div>
            <div className="md:w-1/6 md:h-[45px] hidden md:block">
                <img src={Logo} className="w-[144px] "/>
            </div>
            <div className="md:w-3/6 w-full md:relative hidden md:block">
                <SearchBar/>
            </div>
            <div className="md:w-2/6 w-4/6">
                <ul className="flex items-center justify-end gap-x-2">
                    <li>
                        <Link to="/">
                            <div className="flex gap-2">
                                    <span>{user? (
                                        <>
                                        <LoggedUserDropdown user={user}/>
                                        </>
                                    ):(
                                        <UnloggedUserDownload />
                                    )}</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/wishlist">
                            <div className="flex gap-2 relative">
                                <Heart size={25}/>
                                <div className="flex flex-col">
                                    <span className="hidden md:block">Wishlist</span>
                                </div>
                                <div
                                    className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 start-3 dark:border-gray-900">
                                    {wishlistStore?.wishlist?.length}
                                </div>

                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <div className="flex gap-2 relative">

                                <CartSide/>

                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;