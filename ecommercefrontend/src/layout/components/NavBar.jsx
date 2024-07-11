import Logo from "@/assets/logo.png"
import {Heart, Search, ShoppingCart, User} from "lucide-react";
import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";
import {useUser} from "@/store/userStore.js";
import LoggedUserDropdown from "@/layout/components/LoggedUserDropdown.jsx";
import UnloggedUserDownload from "@/layout/components/UnloggedUserDownload.jsx";
import CartSide from "@/components/cart/CartSide.jsx";
import {useWishlist} from "@/store/wishlistStore.js";
import SearchItems from "@/layout/components/SearchItems.jsx";
import toast from "react-hot-toast";
import {useState} from "react";
import {callApi} from "@/config/apiConfig.js";
import {debounce} from "@/lib/debounce.js";
import {useCallback} from "react";
import {useEffect} from "react";

const Navbar = () =>{
    const userStore = useUser();
    const wishlistStore = useWishlist()
    const {user} = userStore;
    const [products, setProducts] = useState();
    const searchProducts = async (search)=>{
        try{
            const {data} = await callApi({url:`product/search?title=${search}`, method:"get"});
            setProducts(data);
        }catch (e) {
            toast.error(e?.message)
        }
    }
    const handleSearch = useCallback(
        debounce((searchTerm) => {
            searchProducts(searchTerm);
        }, 500),
        [searchProducts]
    );
    const handleChange = (event) => {
        const searchTerm = event.target.value;
        if(searchTerm!==""){
            handleSearch(searchTerm);
        }
    };



    return(
        <div className="md:flex md:gap-8 py-3 w-[85%] m-auto">
            <div className="md:w-1/6 md:h-[45px] hidden md:block">
                <img src={Logo} className="w-[144px] "/>
            </div>
            <div className="md:w-3/6 md:relative hidden md:block">
                <div className="relative w-full h-[50px] flex items-center  p-2 border-[1px] border-solid border-[#eee] justify-between bg-transparent">
                    <input
                        className="block w-full rounded-md border-0 pl-8 py-1.5 focus:outline-none focus:ring-transparent"
                        type="text"
                        placeholder="Search Product...."
                        onChange={handleChange}
                    />
                    <Button className="bg-transparent outline-none border-0 shadow-none hover:bg-transparent"><Search className="block absolute text-gray-400" />
                    </Button>
                </div>
                <div className="w-full absolute h-auto z-20 bg-[#fff]">
                    {
                        products && products?.map((item)=>(
                            <SearchItems product={item} key={item?.id}/>
                        ))
                    }
                </div>
            </div>
            <div className="md:w-2/6 w-full">
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