import {BookCheckIcon, CalendarCheck2, Truck, HandIcon, CircleCheck} from "lucide-react";
import dateFormat from "@/lib/dateFormat.js";

const OrderStatus = ({status})=>{
    return(
        <div className="mt-5">
            <div className="w-full grid grid-cols-3 gap-8">
                <div className="h-[125px] border-[1px] border-[#eee] rounded border-solid bg-[#f8f8fb]">
                    <div className="flex flex-col justify-center items-center p-[30px] w-full h-full">
                        <h6 className="text-[#4b5966] text-[16px] font-medium ">Order ID</h6>
                        <p className="text-[#777] text-center">#{status?.orderId}</p>
                    </div>
                </div>
                <div className="h-[125px] border-[1px] border-[#eee] rounded border-solid bg-[#f8f8fb]">
                    <div className="flex flex-col justify-center items-center p-[30px] w-full h-full">
                        <h6 className="text-[#4b5966] text-[16px] font-medium ">Orderd By</h6>
                        <p className="text-[#777] text-center">{status?.firstName} {status?.lastName}</p>
                    </div>
                </div>
                <div className="h-[125px] border-[1px] border-[#eee] rounded border-solid bg-[#f8f8fb]">
                    <div className="flex flex-col justify-center items-center p-[30px] w-full h-full">
                        <h6 className="text-[#4b5966] text-[16px] font-medium ">Order Date</h6>
                        <p className="text-[#777] text-center">{dateFormat(status?.createdAt)}</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 w-full border-[1px] border-[#eee] rounded border-solid bg-[#f8f8fb] mt-5">
                <div className="flex flex-col relative justify-center items-center p-[30px] w-full h-full border-r-[1px] border-solid border-[#eee]">
                    <BookCheckIcon color="#777"/>
                    <p className="text-[#777]">Order Submitted</p>
                    {
                        status?.orderStatus == "ORDERED" || status?.orderStatus=="CONFIRMED" || status?.orderStatus==="SHIPPED" || status?.orderStatus==="DELIVERED" ? (<CircleCheck className="absolute top-[10px] right-[10px] " color="#5caf90"/>):(<></>)
                    }
                </div>
                <div className="flex flex-col relative justify-center items-center p-[30px] w-full h-full border-r-[1px] border-solid border-[#eee]">
                    <CalendarCheck2 color="#777"/>
                    <p className="text-[#777]">Order Confirmed</p>
                    {
                         status?.orderStatus==="CONFIRMED" || status?.orderStatus==="SHIPPED" || status?.orderStatus==="DELIVERED" ?(<CircleCheck className="absolute top-[10px] right-[10px] " color="#5caf90"/>):(<></>)
                    }
                </div>
                <div className="flex flex-col relative justify-center items-center p-[30px] w-full h-full border-r-[1px] border-solid border-[#eee]">
                    <Truck color="#777"/>
                    <p className="text-[#777]">Order Shipped</p>
                    {
                        status?.orderStatus==="SHIPPED" || status?.orderStatus==="DELIVERED" ? (<CircleCheck className="absolute top-[10px] right-[10px] " color="#5caf90"/>):(<></>)
                    }

                </div>
                <div className="flex flex-col relative justify-center items-center p-[30px] w-full h-full">
                    <HandIcon color="#777"/>
                    <p className="text-[#777]">Order Confirmed</p>
                    {
                        status?.orderStatus==="DELIVERED" ? (<CircleCheck className="absolute top-[10px] right-[10px] " color="#5caf90"/>):(<></>)

                    }
                </div>

            </div>
        </div>
    )
}
export default OrderStatus;