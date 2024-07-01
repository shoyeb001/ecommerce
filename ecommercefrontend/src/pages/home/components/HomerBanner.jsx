import {Button} from "@/components/ui/button.jsx";

const HomerBanner = ()=>{
    return (
        <div className="w-full h-[400px] bg-[url('src/assets/bg2.jpg')] bg-no-repeat bg-cover bg-center">
            <div className="h-full w-full py-[80] px-[100px] flex flex-col justify-center items-end">
                <h2 className="text-6xl font-bold">Fresh Fruits<br/>
                    Healthy Products</h2>
                <p className="text-3xl font-bold mt-5"><span className="text-[#5caf90] ">30% off sale</span> Hurry up!!!</p>
                <Button className="bg-[#5caf90] mt-6">Shop now</Button>
            </div>
        </div>
    )
}
export default HomerBanner