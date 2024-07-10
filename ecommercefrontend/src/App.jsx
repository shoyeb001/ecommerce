import {Routes, Route} from "react-router-dom";
import Layout from "@/layout/Layout.jsx";
import Home from "@/pages/home/Home.jsx";
import Shop from "@/pages/shop/Shop.jsx";
import ProductDetails from "@/pages/product/ProductDetails.jsx";
import Register from "@/pages/auth/Register.jsx";
import Login from "@/pages/auth/Login.jsx";
import {useUser} from "@/store/userStore.js";
import {useEffect} from "react";
import {callApi} from "@/config/apiConfig.js";
import toast from "react-hot-toast";
import {Toaster} from "react-hot-toast";
import Checkout from "@/pages/checkout/Checkout.jsx";
import UserProfile from "@/pages/users/UserProfile.jsx";
import UserAuthenticateRoute from "@/authenticateRoutes/UserAuthenticateRoute.jsx";
import ViewOrders from "@/pages/users/ViewOrders.jsx";
import Invoice from "@/pages/invoice/Invoice.jsx";
import UploadUserImage from "@/pages/users/UploadUserImage.jsx";
import ChangePassword from "@/pages/users/ChangePassword.jsx";
function App() {
    const userStore = useUser();
    const getUser = async (token)=>{
        try {
            const {data} = await callApi({url:"user/detail", method:"get", token});
            userStore.setLoginUser({...data, token});
        }catch (e) {
            toast.error(e?.message)
        }
    }
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            getUser(token)
        }
    }, []);
  return (
    <>
        <Toaster
            position="bottom-right"
            reverseOrder={false}
        />
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/product/:slug" element={<ProductDetails/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/checkout" element={
                    <UserAuthenticateRoute>
                        <Checkout/>
                    </UserAuthenticateRoute>
                }/>
                <Route path="/account/my-profile" element={
                    <UserAuthenticateRoute>
                        <UserProfile/>
                    </UserAuthenticateRoute>
                }/>
                <Route path="/account/my-order" element={
                    <UserAuthenticateRoute>
                        <ViewOrders/>
                    </UserAuthenticateRoute>
                }/>
                <Route path="/account/change-profile" element={
                    <UserAuthenticateRoute>
                        <UploadUserImage/>
                    </UserAuthenticateRoute>
                }/>
                <Route path="/account/change-password" element={
                    <UserAuthenticateRoute>
                        <ChangePassword/>
                    </UserAuthenticateRoute>
                }/>
            </Route>
            <Route path="/order/invoice/:id" element={
                <UserAuthenticateRoute>
                    <Invoice/>
                </UserAuthenticateRoute>
            }/>
        </Routes>
    </>
  )
}

export default App
