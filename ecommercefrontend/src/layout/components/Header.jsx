import TopHeader from "@/layout/components/TopHeader.jsx";
import NavBar from "@/layout/components/NavBar.jsx";
import MainNav from "@/layout/components/MainNav.jsx";

const Header = ()=>{
    return(
        <header>
            <div className="font-body">
                <TopHeader/>
                <NavBar/>
                <MainNav/>
            </div>
        </header>
    )
}
export default Header;