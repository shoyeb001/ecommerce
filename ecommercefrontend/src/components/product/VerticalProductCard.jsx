const VerticalProductCard = ({product})=>{
    return (
        <div className="w-full border-[1px] border-solid border-[#eee]">
            <div className="flex p-2 w-full gap-2">
                <div className="w-[30%]">
                    <img src={product?.thumbnail} className="w-full object-contain"/>
                </div>
                <div className="w-[70%]">
                    <h6 className="text-[#4b5966] text-[14px] leading-6 font-semibold capitalize line-clamp-1">{product?.title}</h6>
                    <p className="text-[#777] mt-2 text-[12px] line-clamp-2">{product?.description}</p>
                    <span className="mt-2">
                        <span className="text-[#777] line-through text-[14px]">Rs {product?.discountPrice?.toFixed(2)}</span>
                        <span className="text-[#4b5966] text-[14px] font-semibold ml-3">Rs {product?.price?.toFixed(2)}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}
export default VerticalProductCard