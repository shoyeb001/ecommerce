import { BriefcaseBusiness, CircleUser,SquareAsterisk,LogOut  } from 'lucide-react';

export const userSidebarLinks = [
    {
        title:"My Profile",
        link:"/account/my-profile",
        icon: CircleUser
    },
    {
        title: "My Order",
        link:"/account/my-order",
        icon: BriefcaseBusiness
    },
    {
        title:"Change Password",
        link:"/account/change-password",
        icon: SquareAsterisk,
    },
    {
        title: "Logout",
        link:"/account/logout",
        icon: LogOut
    }
]