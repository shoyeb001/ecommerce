import {MessageCircle, Phone} from "lucide-react";
import {NavigationMenu, NavigationMenuItem, NavigationMenuList,} from "@/components/ui/navigation-menu"
import {Link} from "react-router-dom";

const TopHeader = ()=>{

    return (
        <div className="md:flex md:w-[85%] m-auto md:py-2  md:text-[#777] md:bg-[#f8f8fb] hidden">
            <div className="flex-1 w-1/5 text-[14px]">
                <NavigationMenu className="w-full">
                    <NavigationMenuList className="flex items-center justify-center gap-x-8">
                        <NavigationMenuItem className="flex">
                            <Phone size={18} className="mr-2"/> 9749220398
                        </NavigationMenuItem>
                        <NavigationMenuItem className="flex mr-5">
                          <MessageCircle size={18} className="mr-2"/>  Whatsapp
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex-1 w-3/5 text-[14px]">
                <p className="text-center">World Best Shopping Platfrom For Dialy Usage</p>
            </div>
            <div className='flex-1 w-1/5 flex justify-end text-[14px]'>
                <li className="inline mr-5"><Link to="/order/track">Track Order</Link></li>
                <li className="inline mr-5"><a href="#">Help</a></li>
                <li className="inline"><a href="#">Contact Us</a></li>
            </div>
        </div>
    );
}
export default TopHeader;