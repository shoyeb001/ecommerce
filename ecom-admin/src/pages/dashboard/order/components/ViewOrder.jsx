import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import IMG from "@/assets/react.svg"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Separator} from "@/components/ui/separator.jsx";
import toast from "react-hot-toast";
import {callApi} from "@/config/apiconfig.js";
import {useUser} from "@/store/user.js";
const ViewOrder = ({order})=>{
    const userStore = useUser();
    const changeStatus = async (id, status)=>{
        try{
            const order = await callApi({url:`admin/orders/changestatus?orderId=${id}`, method:"put", data:{status:status}, token:userStore?.token})
            toast.success("Order status Updated successfully.");
        }catch (e) {
            toast.error(e?.message)
        }
    }
    return(
        <Sheet>
            <SheetTrigger>View Order</SheetTrigger>
            <SheetContent className="w-full">
                <SheetHeader>
                    <SheetTitle>Order Details</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="font-bold">First Name:</div>
                        <div className="pl-4">{order?.firstName}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="font-bold">Last Name:</div>
                        <div className="pl-4">{order?.lastName}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mb-2">
                        <div className="font-bold">Address:</div>
                        <div className="pl-4">{order?.address} {order?.state} {order?.pin}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mb-2">
                        <div className="font-bold">Payment Id</div>
                        <div className="pl-4">{order?.paymentId}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mb-2">
                        <div className="font-bold">Total Price</div>
                        <div className="pl-4">{order?.totalPrice}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mb-2">
                        <div className="font-bold">Total GST Price</div>
                        <div className="pl-4">{order?.gstPrice}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mb-2">
                        <div className="font-bold">Change Status</div>
                        <div className="pl-4">
                            <Select onValueChange={(val)=>changeStatus(order?.id, val)} defaultValue={order?.orderStatus}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Update Status" />
                                    </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ORDERED">ORDERED</SelectItem>
                                    <SelectItem value="CONFIRMED">CONFIRMED</SelectItem>
                                    <SelectItem value="SHIPPED">SHIPPED</SelectItem>
                                    <SelectItem value="DELIVERED">DELIVERED</SelectItem>

                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <Separator/>
                <h6 className="font-bold mt-2">Products</h6>
                <div className="flex flex-col gap-2 w-full">
                    {
                        order.OrderItems?.map((item, index)=> (
                            <div className="flex gap-2 border-[1px] border-[#eee] rounded border-solid p-3" key={index}>
                                <div className="w-[1/5] overflow-hidden">
                                    <img src={item?.product?.thumbnail} className="w-[160px] h-[120px] object-contain"/>
                                </div>
                                <div className="w-[4/5]">
                                    <h6 className="font-medium line-clamp-2">{item?.product?.title}</h6>
                                    <p className="text-[#777] text-[14px] line-clamp-1">{item?.product?.description}</p>
                                    <div className="flex gap-2">
                                        <div>Qty : <span className="font-bold">{item?.quantity}</span></div>
                                        <div><span>Rs. {item?.product?.discountPrice}</span></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </SheetContent>
        </Sheet>
    )
}
export default ViewOrder;