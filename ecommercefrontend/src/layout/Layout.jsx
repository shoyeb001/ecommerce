import Header from "@/layout/components/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "@/layout/components/Footer.jsx";

const Layout = ()=>{
    return(
        <>
        <Header/>
            <div className="w-[85%] m-auto font-body">
                <Outlet/>
            </div>
        <Footer/>
        </>
    )
}
export default Layout;