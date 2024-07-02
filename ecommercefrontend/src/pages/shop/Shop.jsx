import BreadCrump from "@/components/breadcrumb/BreadCrump.jsx";
import CategorySlider from "@/components/category/CategorySlider.jsx";
import ShopContainer from "@/pages/shop/components/ShopContainer.jsx";

const Shop = ()=>{
    const links = [{
        name:"Home",
        link:"/"
    }]
    return (
        <div className="mt-5">
            <BreadCrump title="Shop Page" page="Shop" links={links}/>
            <CategorySlider/>
            <ShopContainer/>
        </div>
    );
}
export default Shop;