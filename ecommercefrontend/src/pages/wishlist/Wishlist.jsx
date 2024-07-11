import BreadCrump from "@/components/breadcrumb/BreadCrump.jsx";
import WishlistHeading from "@/pages/wishlist/component/WishlistHeading.jsx";
import WishlistTable from "@/pages/wishlist/component/WishlistTable.jsx";

const Wishlist = ()=>{
    const links = [{
        name:"Home",
        link:"/"
    }]
    return (
        <div className="mt-5">
            <BreadCrump title="Wish List" page="Wish List" links={links}/>
            <WishlistHeading/>
            <WishlistTable/>
        </div>
    )
}
export default Wishlist;