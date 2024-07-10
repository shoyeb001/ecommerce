import {Link} from "react-router-dom";
import BreadCrump from "@/components/breadcrumb/BreadCrump.jsx";
import {BriefcaseBusiness} from "lucide-react";
import {useUser} from "@/store/userStore.js";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.jsx";
import {userSidebarLinks} from "@/constant/userSidebar.js";
const UserSidebar = ({children})=>{
    const userStore = useUser();
    const {user} = userStore;
    const links = [{
        name:"Home",
        link:"/"
    }]
    return (
        <div className="w-full mt-5">
            <BreadCrump title="My Account" page="My Account" links={links}/>

            <div className="flex justify-between gap-4 mt-4">

                <div className="w-[30%] h-auto">
                    <div className="w-full h-[100px] border-[1px] border-[#eee] rounded border-solid mb-3">
                        <div className="w-full h-full  flex gap-4 items-center p-4">
                            <Avatar>
                                <AvatarImage src={user?.avatar} alt="User" />
                                <AvatarFallback>{user?.firstName[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                                <span className="text-[14px] text-[#777]">Hello</span>
                                <h6 className="font-semibold text-[16px]">{user?.firstName} {user?.lastName}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto border-[1px] border-[#eee] rounded border-solid flex flex-col gap-2">
                        {
                           userSidebarLinks.map((items, index) => (
                                <div
                                    className="w-full h-[auto] text-[16px] text-[#777] hover:bg-[#f8f8fb] py-4 px-6 flex items-center"
                                    key={index}>
                                    <Link to={items?.link} className="flex gap-1 items-center">
                                        <items.icon/>
                                        {items?.title}
                                    </Link>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className="w-[70%]">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default UserSidebar;