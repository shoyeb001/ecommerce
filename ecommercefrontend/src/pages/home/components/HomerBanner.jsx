import {Button} from "@/components/ui/button.jsx";

const HomerBanner = ()=>{
    return (
        <div className="w-full md:h-[400px] relative h-[200px] bg-[url('src/assets/bg2.jpg')] bg-no-repeat bg-cover bg-center">
            <div className="h-full w-full py-[80] md:px-[100px] px-[50px]  flex flex-col justify-center items-end">
                <h2 className="md:text-6xl md:text-[18px] font-bold">Fresh Fruits<br/>
                    Healthy Products</h2>
                <p className="md:text-3xl text-[15px] font-bold md:mt-5 mt-3"><span className="text-[#5caf90] ">30% off sale</span> Hurry up!!!</p>
                <Button className="bg-[#5caf90] text-[12px] md:text-[14px] md:mt-6 mt-3">Shop now</Button>
            </div>
        </div>
    )
}
export default HomerBanner