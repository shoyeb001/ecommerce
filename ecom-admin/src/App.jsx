
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Layout from "@/layout/Layout.jsx";
import ProductList from "@/pages/dashboard/product/ProductList.jsx";
import {Toaster} from "react-hot-toast";
import AuthenticateRoute from "@/protectedRoutes/AuthenticateRoute.jsx";
import CategoryList from "@/pages/dashboard/category/CategoryList.jsx";
function App() {

  return (
    <>
      <Toaster  position="down-right"/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path="/dashboard" element={<Layout/>}>
        <Route path="/dashboard/products" element={
          <AuthenticateRoute>
          <ProductList/>
            </AuthenticateRoute>
        }/>
        <Route path="/dashboard/categories" element={
          <AuthenticateRoute>
            <CategoryList/>
            </AuthenticateRoute>
        }/>
      </Route>
    </Routes>
    </>
  )
}

export default App
