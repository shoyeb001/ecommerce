
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
            </Route>
        </Routes>
    </>
  )
}

export default App
