import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {useUser} from "@/store/userStore.js";
import {callApi} from "@/config/apiConfig.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
const LoggedUserDropdown = ()=>{
    const userStore = useUser();
    const {user, logout} = userStore;
    const navigate = useNavigate();
    const logoutUser = async ()=>{
        try{
            await callApi({url:"user/logout", method:"get", token:user?.token});
            logout();
            localStorage.clear()
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
                    My Account
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={logoutUser}>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default LoggedUserDropdown;