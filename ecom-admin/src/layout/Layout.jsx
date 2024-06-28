import {ScrollArea} from "@/components/ui/scroll-area.jsx";
import {Outlet} from "react-router-dom";
import Sidebar from "@/layout/Sidebar.jsx";
import Header from "@/layout/Header.jsx";

const Layout = ()=>{
    return(
        <>
            <div className="flex">
                <div className="w-1/5 relative">
                    <Sidebar/>

                </div>
                <div className="w-4/5">
                    <Header/>
                    <ScrollArea>
                        <Outlet/>
                    </ScrollArea>
                </div>
            </div>

        </>
    )
}
export default Layout;