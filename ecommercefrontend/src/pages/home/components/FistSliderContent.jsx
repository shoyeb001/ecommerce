import {Button} from "@/components/ui/button.jsx";

const FistSliderContent = ({data})=>{
    return (
        <div className="w-full bg-[url('src/assets/bg1.jpg')] h-full bg-no-repeat bg-cover bg-center">
            <div className="max-w-[33rem] h-full flex flex-col justify-center p-[30px]">
                <p className="mb-[20px] text-[20px] text-[#5caf90] leading-[1] tracking-[0] font-medium max-[767px]:text-[16px] max-[360px]:text-[13px]">{data?.sub}</p>
                <h1 className="mb-[20px] text-5xl font-bold">{data?.heading}</h1>
                <Button className="w-[200px]">Shop Now >></Button>
            </div>

        </div>
    )
}
export default FistSliderContent