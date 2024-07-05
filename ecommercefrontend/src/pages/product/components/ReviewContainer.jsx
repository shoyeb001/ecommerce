import User from "@/assets/user.jpg"
import {Star} from "lucide-react";
import ReviewForm from "@/pages/product/components/ReviewForm.jsx";
const ReviewContainer = ({data})=>{
    return (
        <div className="w-full px-3 py-5 flex gap-4">
            <div className="w-[50px] h-[50px] rounded">
                <img src={User} className="w-full h-full object-contain overflow-hidden"/>
            </div>
            <div className="flex flex-col border-b-[1px] pb-6 border-solid border-[#eee]">
                <h4 className=" text-[15px]">Sk Shoyeb</h4>
                <div className="flex mt-2 gap-1">
                    {
                        [...Array(5)].map((_,index)=>(
                            <Star key={index} stroke={(data?.rating)>index ? "#f27d0c": "#777"} size={14} fill={(data?.rating)>index ? "#f27d0c": "#fff"} />
                        ))
                    }
                </div>
                <div className="text-[14px] text-[#777] mt-3 leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</div>
            </div>
        </div>
    )
}
export default ReviewContainer;