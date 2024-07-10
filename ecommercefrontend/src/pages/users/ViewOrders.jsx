import UserSidebar from "@/components/userprofile/UserSidebar.jsx";
import {useEffect} from "react";
import {useUser} from "@/store/userStore.js";
import toast from "react-hot-toast";
import {callApi} from "@/config/apiConfig.js";
import {useOrder} from "@/store/orderStore.js";
import OrderCard from "@/pages/users/components/OrderCard.jsx";

const ViewOrders = ()=>{
    const userStore = useUser();
    const orderStore = useOrder()
    const {orders, setOrder} = orderStore;
    const {user} = userStore;
    const fetchOrders = async ()=>{
        try {
            const {data} = await callApi({
                url:"user/order/view",
                method:"get",
                token: user?.token
            })
            setOrder(data);
        }catch (e) {
            toast.error("Error fetching Orders");
        }
    }
    useEffect(()=>{
        if(user!==null) fetchOrders()
    },[user])
    return (
        <UserSidebar>
            <div>
                <h2 className="font-medium">My Orders</h2>
                {
                    orders?.map((order)=>(
                        <OrderCard order={order}/>
                    ))
                }
            </div>
        </UserSidebar>
    )
}
export default ViewOrders