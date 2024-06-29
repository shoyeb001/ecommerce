import CategoryTable from "@/pages/dashboard/category/components/CategoryTable.jsx";
import {categoryColumn} from "@/pages/dashboard/category/components/CategoryColumn.jsx";

const CategoryList = ()=>{
    const data = [
        {
            name:"Product 1",
            image:"https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UF1000,1000_QL80_.jpg",
            slug:"product-1"
        },
        {
            name:"Product 1",
            image:"https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UF1000,1000_QL80_.jpg",

            slug:"product-1"
        }
    ]
    return(
        <div className="p-3">
            <CategoryTable data={data} columns={categoryColumn}/>
        </div>
        );
}
export default CategoryList