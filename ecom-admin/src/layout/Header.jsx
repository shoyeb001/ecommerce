import ProfileMenu from "@/layout/ProfileMenu.jsx";

const Header = ()=>{
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
            <div>
                <h2 className="font-bold text-2xl">Admin</h2>
            </div>
            <div>
                <ProfileMenu/>
            </div>
        </header>
    );
}
export default Header;