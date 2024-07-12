import {Button} from "@/components/ui/button.jsx";
import Link from "react-router-dom";

const OrderProductCard = ({product}) => {
    return (
        <div className="card border-[1px] border-solid border-[#eee]">
            <div className="flex gap-4 p-4">
                <div className="w-[25%] h-[200] overflow-hidden">
                    <img src={product?.thumbnail} alt="product" className="w-full h-full object-contain"/>
                </div>
                <div className="w-[75%]">
                    <div className="flex justify-between w-full">
                        <h6 className="font-medium w-auto text-[18px]">{product?.title}</h6>
                        <span className="font-medium text-[18px]">Rs {product?.discountPrice}</span>
                    </div>
                    <p className="text-[#777] mt-3">{product?.description}</p>
                    <Link to={`/product/${product?.slug}`}>
                        <Button className="mt-3">View Product</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default OrderProductCard;