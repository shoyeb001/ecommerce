
import {Routes, Route} from "react-router-dom";
import Login from "@/pages/login/Login.jsx";
import Layout from "@/layout/Layout.jsx";
import Home from "@/pages/home/Home.jsx";
import Shop from "@/pages/shop/Shop.jsx";
import ProductDetails from "@/pages/product/ProductDetails.jsx";
function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/product/:slug" element={<ProductDetails/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App
