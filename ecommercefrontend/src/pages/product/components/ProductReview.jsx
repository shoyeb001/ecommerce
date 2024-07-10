import ReviewContainer from "@/pages/product/components/ReviewContainer.jsx";
import {reviewData} from "@/constant/review.js";
import ReviewForm from "@/pages/product/components/ReviewForm.jsx";
import {useProduct} from "@/store/productStore.js";
const ProductReview = ()=>{
   const productStore = useProduct();
   const {product} = productStore;
    return (
        <div className="w-full border-[1px] border-solid border-[#eee]">
            {
                product?.review.map((item)=>(
                    <ReviewContainer data={item}/>
                ))
            }
            <ReviewForm/>
        </div>
    );
}
export default ProductReview