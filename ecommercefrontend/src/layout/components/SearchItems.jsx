import Image from "@/assets/product.jpg"
import {Link} from "react-router-dom";
const SearchItems = ({product})=>{
    return (
        <Link to={`/product/${product?.slug}`}>
            <div className="w-full p-2 flex gap-3 items-center border-[1px] border-solid border-[#eee]">
                <img src={product?.thumbnail} className="w-[70px] h-[70px] object-contain"/>
                <div>
                    <h6 className="text-[16px] text-[#777] font-semibold line-clamp-1">{product?.title}</h6>
                    <p className="text-[14px] text-[#777] line-clamp-1">{product?.description}</p>
                </div>
            </div>
        </Link>

    )
}
export default SearchItems