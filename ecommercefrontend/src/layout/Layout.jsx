import Header from "@/layout/components/Header.jsx";
import {Outlet} from "react-router-dom";
const Layout = ()=>{
    return(
        <>
        <Header/>
            <div className="px-12 font-body">
                <Outlet/>
            </div>
        </>
    )
}
export default Layout;