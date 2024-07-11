import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import OrderStatus from "@/pages/orderstatus/components/OrderStatus.jsx";
import {useState} from "react";
import toast from "react-hot-toast";
import {callApi} from "@/config/apiConfig.js";
import {useUser} from "@/store/userStore.js";
const TrackOrder = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState();
    const [orderId, setOrderId] = useState("");
    const userStore = useUser();
    const checkStatus = async ()=>{
        try{
            setIsLoading(true)
            const status = await callApi({url:`user/order/track?orderId=${orderId}`, method:"get", token:userStore?.token});
            setStatus(status);
            setIsLoading(false)
        }catch (e) {
            setIsLoading(false)
            toast.error(e?.response?.data?.message)
        }
    }
    return(
        <>
            <div className="mt-3 w-[400px] m-auto">
                <Input type="text" className="w-full" value={orderId} onChange={(e)=>{setOrderId(e?.target?.value)}} placeholder="Enter Order Id"/>
                <p className="text-center mt-3"><Button onClick={checkStatus} disabled={isLoading}>Track Order</Button></p>
            </div>
            {
                status &&  <OrderStatus status={status}/>

            }

        </>

    )
}
export default TrackOrder;