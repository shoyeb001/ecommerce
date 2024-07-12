import Logo from "@/assets/logo.png"
import SearchBar from "@/layout/components/SearchBar.jsx";

const MobileNav = ()=>{
    return (
        <div className="w-[85%] m-auto flex flex-col md:hidden">
            <div className="w-[50%] m-auto">
                <img src={Logo} className="w-full overflow-hidden"/>
            </div>
            <div className="w-full mt-3 relative">
                <SearchBar/>
            </div>
        </div>
    )
}
export default MobileNav;