import HomeSlider from "@/pages/home/components/HomeSlider.jsx";
import CategorySlider from "@/components/category/CategorySlider.jsx";
import ProductSlider from "@/components/product/ProductSlider.jsx";
import HomerBanner from "@/pages/home/components/HomerBanner.jsx";
import ProductContainer from "@/components/product/ProductContainer.jsx";
import Features from "@/pages/home/components/Features.jsx";
const Home = ()=>{
    return (<>
        <div className="w-full mt-5">
            <HomeSlider/>
            <CategorySlider/>
            <div className="mt-[70px]">
                <h2 className="capitalize text-2xl font-bold mb-2">Day of the <span
                    className="text-[#5caf90]">deal</span></h2>
                <p className="text-[14px] text-[#777] leading-[18p] leading-3 mb-[45px]">Don't wait. The time will never
                    be just right.</p>
                <ProductSlider/>
            </div>
            <div className="mt-[70px]">
                <HomerBanner/>
            </div>
            <div className="mt-[70px]">
                <h2 className="capitalize text-2xl font-bold mb-2">New <span
                    className="text-[#5caf90]">Arrivals</span></h2>
                <p className="text-[14px] text-[#777] leading-[18p] leading-3 mb-[45px]">Shop online for new arrivals and get free shipping!</p>
                <ProductContainer/>
            </div>
            <div className="mt-[70px]">
                <Features/>
            </div>
        </div>
    </>)
}
export default Home