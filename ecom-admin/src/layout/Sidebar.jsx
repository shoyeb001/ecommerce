import {CircleGauge} from "lucide-react";
import sidebarLinks from "@/constant/sidebarLinks.js";
import {Link} from "react-router-dom";
import userLinks from "@/constant/userLinks.js";
const Sidebar = ()=>{
    return (

        <aside id="default-sidebar"
               className="absolute top-0 left-0 z-40 w-full h-screen transition-transform -translate-x-full sm:translate-x-0"
               aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {
                        sidebarLinks?.map((item, index) => (
                            <li key={index}>
                                <Link to={item?.path}
                                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <item.icon/>
                                    <span className="ms-3">{item?.name}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                    {
                        userLinks?.map((item, index) => (
                            <li key={index}>
                                <Link to={item?.path}
                                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <item.icon/>
                                    <span className="ms-3">{item?.name}</span>
                                </Link>
                            </li>
                        ))
                    }


                </ul>
            </div>
        </aside>

    )
}
export default Sidebar