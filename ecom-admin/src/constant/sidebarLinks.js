import {CircleGauge, PackageSearch, List, ShoppingCart, User} from "lucide-react";

const sidebarLinks = [
    {
        name:"Dashboard",
        path: "/dashboard",
        icon: CircleGauge,
    },
    {
        name: "Products",
        path:"/dashboard/products",
        icon:PackageSearch
    },
    {
        name:"Categories",
        path:"/dashboard/categories",
        icon:List
    },
    {
        name:"Orders",
        path:"/dashboard/orders",
        icon:ShoppingCart
    },
    {
        name: "Users",
        path: "/dashboard/users",
        icon:User
    }
]
export default sidebarLinks;