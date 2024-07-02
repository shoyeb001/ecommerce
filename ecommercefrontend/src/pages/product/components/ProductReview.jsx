import ReviewContainer from "@/pages/product/components/ReviewContainer.jsx";
import {reviewData} from "@/constant/review.js";
const ProductReview = ()=>{

    return (
        <div className="w-full border-[1px] border-solid border-[#eee]">
            {
                reviewData?.map((item)=>(
                    <ReviewContainer data={item}/>
                ))
            }
        </div>
    );
}
export default ProductReview