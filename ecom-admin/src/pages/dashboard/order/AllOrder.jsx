import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {useOrder} from "@/store/order.js";
import {useUser} from "@/store/user.js";
import toast from "react-hot-toast";
import {useEffect} from "react";
import {callApi} from "@/config/apiconfig.js";
import ViewOrder from "@/pages/dashboard/order/components/ViewOrder.jsx";
import {useState} from "react";
const AllOrder = ()=>{
    const [filter, setFilter] = useState("ALL");
    const userStore = useUser();
    const orderStore = useOrder();
    const {order, setOrder} = orderStore;
    let amount = 0;

    const getAllOrders = async ()=>{
        try{
            let url="";
            if(filter!=="ALL"){
                url = `admin/orders/all?status=${filter}`
            }else{
                url ="admin/orders/all"
            }
            const {data} = await callApi({url: url,method:"GET", token:userStore.user.token});
            setOrder(data);
        }catch (e) {
            toast.error(e?.message)
        }
    }
    useEffect(()=>{
        getAllOrders()
    },[filter])
    return (
        <div className="w-[95%] m-auto">
            <div className="flex justify-between mt-2">
                <h6 className="font-bold mb-2 mt-2">All Orders</h6>
                <div className="flex gap-2 items-center justify-center">
                    <span className="font-medium">Filter </span>
                    <Select onValueChange={(val)=>setFilter(val)} defaultValue={filter}>
                            <SelectTrigger>
                                <SelectValue placeholder="Filter Status" />
                            </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="ALL">ALL STATUS</SelectItem>
                            <SelectItem value="ORDERED">ORDERED</SelectItem>
                            <SelectItem value="CONFIRMED">CONFIRMED</SelectItem>
                            <SelectItem value="SHIPPED">SHIPPED</SelectItem>
                            <SelectItem value="DELIVERED">DELIVERED</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Order Id</TableHead>
                        <TableHead>Order Status</TableHead>
                        <TableHead>Payment Method</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Pay Status</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {order.map((item) => {
                        amount = amount + item?.gstPrice;

                        return(
                           <TableRow key={item?.id}>
                            <TableCell className="font-medium">{item?.orderId}</TableCell>
                            <TableCell>{item?.orderStatus}</TableCell>
                            <TableCell>{item?.paymentMethod}</TableCell>
                            <TableCell>{item?.gstPrice}</TableCell>
                            <TableCell>{item?.paymentStatus}</TableCell>
                            <TableCell>{item?.firstName} {item?.lastName}</TableCell>
                            <TableCell><ViewOrder order={item}/></TableCell>

                        </TableRow>
                       )
                    })}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">Rs {amount.toFixed(2)}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}
export default AllOrder