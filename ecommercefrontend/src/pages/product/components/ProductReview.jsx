import ReviewContainer from "@/pages/product/components/ReviewContainer.jsx";
import {reviewData} from "@/constant/review.js";
import ReviewForm from "@/pages/product/components/ReviewForm.jsx";
const ProductReview = ()=>{

    return (
        <div className="w-full border-[1px] border-solid border-[#eee]">
            {
                reviewData?.map((item)=>(
                    <ReviewContainer data={item}/>
                ))
            }
            <ReviewForm/>
        </div>
    );
}
export default ProductReview