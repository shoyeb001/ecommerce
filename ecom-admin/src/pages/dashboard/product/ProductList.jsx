import {productColumn} from "@/pages/dashboard/product/components/ProductColumn.jsx";
import ProductTable from "@/pages/dashboard/product/components/ProductTable.jsx";
const ProductList = () =>{
    const data = [
        {
            title:"Product 1",
            thumbnail:"https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UF1000,1000_QL80_.jpg",
            price:3000,
            category:"juice",
            slug:"product-1"
        },
        {
            title:"Product 1",
            thumbnail:"https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UF1000,1000_QL80_.jpg",
            price:3000,
            category:"juice",
            slug:"product-1"
        }
    ]
    return (
        <div className="p-3">
            <ProductTable data={data} columns={productColumn}/>
        </div>
    )
}
export default ProductList;