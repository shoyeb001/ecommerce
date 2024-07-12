import TopHeader from "@/layout/components/TopHeader.jsx";
import NavBar from "@/layout/components/NavBar.jsx";
import MainNav from "@/layout/components/MainNav.jsx";
import MobileNav from "@/layout/components/MobileNav.jsx";

const Header = ()=>{
    return(
        <header>
            <div className="font-body">
                <TopHeader/>
                <NavBar/>
                <MainNav/>
                <MobileNav/>
            </div>
        </header>
    )
}
export default Header;