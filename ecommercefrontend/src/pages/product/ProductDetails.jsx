import BreadCrump from "@/components/breadcrumb/BreadCrump.jsx";
import DetailContainer from "@/pages/product/components/DetailContainer.jsx";
import {useProduct} from "@/store/productStore.js";
import {callApi} from "@/config/apiConfig.js";
import {useParams} from "react-router-dom";
import toast from "react-hot-toast";
import {useEffect} from "react";
const ProductDetails = ()=>{
    const productStore = useProduct();
    const {slug} = useParams();
    const {product, setProductDetail} = productStore;
    const links = [{
        name:"Home",
        link:"/"
    }]
    const getProductDetail = async()=>{
        try {
            const {data} = await callApi({url:`product/detail?slug=${slug}`, method:"get"});
            setProductDetail(data)
        }catch (e) {
            toast.error(e?.message)
        }
    }

    useEffect(()=>{
        getProductDetail()
    },[])
    return (
        <div className="mt-5">
            <BreadCrump title="Product Details" page="Product Details" links={links}/>
            <DetailContainer/>
        </div>
    )
}
export default ProductDetails