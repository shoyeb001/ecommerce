import {productColumn} from "@/pages/dashboard/product/components/ProductColumn.jsx";
import ProductTable from "@/pages/dashboard/product/components/ProductTable.jsx";
import {useProduct} from "@/store/product.js";
import {useEffect} from "react";
import {useUser} from "@/store/user.js";
const ProductList = () =>{
    const productStore = useProduct();
    const userStore= useUser();
    useEffect(()=>{
        productStore.getProducts(userStore?.token);
    },[])
    return (
        <div className="p-3">
            {
                productStore?.products &&(
                    <ProductTable data={productStore?.products} columns={productColumn}/>
                )
            }
        </div>
    )
}
export default ProductList;