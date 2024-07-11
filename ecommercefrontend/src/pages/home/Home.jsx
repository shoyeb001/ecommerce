import HomeSlider from "@/pages/home/components/HomeSlider.jsx";
import CategorySlider from "@/components/category/CategorySlider.jsx";
import ProductSlider from "@/components/product/ProductSlider.jsx";
import HomerBanner from "@/pages/home/components/HomerBanner.jsx";
import ProductContainer from "@/components/product/ProductContainer.jsx";
import Features from "@/pages/home/components/Features.jsx";
import {useProduct} from "@/store/productStore.js";
import {useEffect} from "react";
import {callApi} from "@/config/apiConfig.js";
import toast from "react-hot-toast";
const Home = ()=>{
    const productStore = useProduct();
    const getHomeProducts = async ()=>{
        try{
            productStore.isLoading = true;
            const {data} = await callApi({url:"product/all?limit=10&sortBy=latest", method:"get"});
            productStore.getProducts(data);
            productStore.isLoading = false;
        }catch (e) {
            toast.error(e?.message);
            productStore.isLoading = false;
        }
    }
    useEffect(()=>{
        productStore.getFeatureProducts();
        getHomeProducts();
    },[])
    return (<>
        <div className="w-full mt-5">
            <HomeSlider/>
            <CategorySlider/>
            <div className="mt-[70px]">
                <h2 className="capitalize text-2xl font-bold mb-2">Day of the <span
                    className="text-[#5caf90]">deal</span></h2>
                <p className="text-[14px] text-[#777] leading-3 mb-[45px]">Don't wait. The time will never
                    be just right.</p>
                <ProductSlider products={productStore?.featuredProducts}/>
            </div>
            <div className="md:mt-[70px] mt-[40px]">
                <HomerBanner/>
            </div>
            <div className="md:mt-[70px] mt-[40px]">
                <h2 className="capitalize text-2xl font-bold mb-2">New <span
                    className="text-[#5caf90]">Arrivals</span></h2>
                <p className="text-[14px] text-[#777] leading-[18p] leading-3 mb-[45px]">Shop online for new arrivals and get free shipping!</p>
                <ProductContainer products={productStore?.products}/>
            </div>
            <div className="md:mt-[70px] mt-[40px]">
                <Features/>
            </div>
        </div>
    </>)
}
export default Home