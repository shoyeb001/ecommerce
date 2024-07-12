import {Star} from "lucide-react";
import {useState} from "react";
import {Textarea} from "@/components/ui/textarea.jsx";
import {Button} from "@/components/ui/button.jsx";
import {useProduct} from "@/store/productStore.js";
import {callApi} from "@/config/apiConfig.js";
import {useUser} from "@/store/userStore.js"
import toast from "react-hot-toast";

const ReviewForm = ()=>{
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState();
    const [description, setDescription] = useState("");
    const productStore = useProduct()
    const [isLoading, setIsLoading] = useState(false);
    const userStore = useUser();
    const submitReview = async()=>{
        try{
            setIsLoading(true);
            const {data}=  await callApi({url:"user/review/add", method:"post", token:userStore.user.token, data:{description, rating:currentValue, productId: productStore.product.id}})
            setIsLoading(false);
            productStore.setProductReview(data);
            toast.success("Review added successfully")
            setCurrentValue(0);
            setDescription("");

        }catch (e) {
            console.log(e)
            setIsLoading(false)
            toast.error(e?.response?.data?.message)
        }
    }
    return(
        <div className="w-full p-5">
            <h4 className="font-bold md:text-2xl text-md mb-3">Add a Review</h4>
            <div className="flex gap-4 items-center">
                <h6 className="font-medium text-[16px] text-[#777]">Your Rating:</h6>
                <div className="flex gap-1">
                    {
                        [...Array(5)].map((_,index)=>(
                            <Star key={index}  onClick={() => setCurrentValue(index + 1)}
                                  onMouseOver={() => setHoverValue(index + 1)}
                                  onMouseOut={() => setHoverValue(undefined)} stroke={(hoverValue||currentValue)>index?"#f27d0c":"#777"} size={14} fill={(hoverValue||currentValue)>index?"#f27d0c":"#777"} />
                        ))
                    }
                </div>
            </div>
            <div className="mt-6">
                <Textarea className="w-full h-40" placeholder="Add your comment" onChange={(e)=>setDescription(e.target.value)}>{description}</Textarea>
            </div>
            <Button className="mt-6" disabled={isLoading} onClick={submitReview}>Submit Review</Button>
        </div>
    )
}
export default ReviewForm;