import {Button} from "@/components/ui/button.jsx";
import Bg from "@/assets/bg1.jpg"
const FistSliderContent = ({data})=>{
    return (
        // <div className="w-full bg-[url('src/assets/bg1.jpg')] h-full bg-no-repeat bg-cover bg-center">
        //     <div className="max-w-[33rem] h-full flex flex-col justify-center md:p-[30px] p-[20px]">
        //         <p className="md:mb-[20px] mb-2 md:text-[20px] text-[15px] text-[#5caf90] leading-[1] tracking-[0] font-medium max-[767px]:text-[16px] max-[360px]:text-[13px]">{data?.sub}</p>
        //         <h1 className="md:mb-[20px] mb-3 text[18px] md:text-5xl font-bold">{data?.heading}</h1>
        //         <Button className="md:w-[200px] w-[80px] text-[10px]">Shop Now</Button>
        //     </div>
        //
        // </div>
        <div className="w-full h-full relative">
            <div className="w-full h-full">
                <img src={Bg} className="w-full h-full object-cover"/>
            </div>
            <div className="w-full h-full absolute top-0 left-0 bg-transparent">
                     <div className="max-w-[33rem] h-full flex flex-col justify-center md:p-[30px] p-[20px] bg-transparent">
                         <p className="md:mb-[20px] mb-2 md:text-[20px] text-[15px] text-[#5caf90] leading-[1] tracking-[0] font-medium max-[767px]:text-[16px] max-[360px]:text-[13px]">{data?.sub}</p>
                       <h1 className="md:mb-[20px] mb-3 text[18px] md:text-5xl font-bold">{data?.heading}</h1>
                       <Button className="md:w-[200px] w-[80px] text-[10px]">Shop Now</Button>
                     </div>
            </div>
        </div>
    )
}
export default FistSliderContent