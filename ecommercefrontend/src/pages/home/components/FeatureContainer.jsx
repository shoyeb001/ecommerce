import {Truck} from 'lucide-react';

const FeatureContainer = ()=>{
    return (
        <div className="border-[1px] border-[#eee] border-solid shadow w-full flex flex-col justify-center items-center py-[20px]">
            <Truck size={40} color="#5caf90" strokeWidth={1}/>
            <h6 className="text-[18px] font-medium mt-5">Free Shipping</h6>
            <p className="px-4 text-center mt-3 text-[14px] text-[#777] leading-[1.5] tracking-[0.5px]">Free shipping on all US order or order above $200</p>
        </div>
    )
}
export default FeatureContainer;