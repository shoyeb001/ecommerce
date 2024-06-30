import Logo from "@/assets/logo.png"
import {Command, CommandInput} from "@/components/ui/command.jsx";
import {Heart, Search, ShoppingCart, User} from "lucide-react";
import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";

const Navbar = () =>{
    return(
        <div className=" flex gap-8 py-3 w-[85%] m-auto">
            <div className="w-1/6 h-[45px]">
                <img src={Logo} className="w-[144px] "/>
            </div>
            <div className="w-3/6">
                <div className="relative w-full h-[50px] flex items-center  p-2 border-[1px] border-solid border-[#eee] justify-between bg-transparent">
                    <input
                        className="block w-full rounded-md border-0 pl-8 py-1.5 focus:outline-none focus:ring-transparent"
                        type="text"
                        placeholder="Search Product...."
                    />
                    <Button className="bg-transparent outline-none border-0 shadow-none hover:bg-transparent"><Search className="block absolute text-gray-400" />
                    </Button>
                </div>
            </div>
            <div className="w-2/6 ">
                <ul className="flex items-center justify-end gap-x-8">
                    <li>
                        <Link to="/">
                            <div className="flex gap-2">
                                <User size={25}/>
                                <div className="flex flex-col">
                                    <span>Account</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/mnjuser/jobs">
                            <div className="flex gap-2 relative">
                                <Heart size={25}/>
                                <div className="flex flex-col">
                                    <span>Wishlist</span>
                                </div>
                                <div
                                    className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 start-3 dark:border-gray-900">20
                                </div>

                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/mnjuser/companies">
                            <div className="flex gap-2 relative">
                                <ShoppingCart size={25}/>
                                <div className="flex flex-col">
                                    <span>Cart</span>
                                </div>
                                <div
                                    className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 start-3 dark:border-gray-900">20
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;