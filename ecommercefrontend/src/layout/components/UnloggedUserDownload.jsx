import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {User} from "lucide-react";
import {Link} from "react-router-dom";
const UnloggedUserDownload = ()=>{
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <span className="flex gap-1 text-[14px] items-center"><User size={25}/> Account</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                    <Link to="/login" className="w-full">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/register" className="w-full">Register</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UnloggedUserDownload;