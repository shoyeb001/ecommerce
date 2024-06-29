import CategoryTable from "@/pages/dashboard/category/components/CategoryTable.jsx";
import {categoryColumn} from "@/pages/dashboard/category/components/CategoryColumn.jsx";
import {useCategory} from "@/store/category.js";
import {useEffect} from "react";
const CategoryList = ()=>{
    const categoryStore = useCategory();
    useEffect(()=>{
        categoryStore.viewCategories();
    },[])
    return(
        <div className="p-3">
            {
                categoryStore && (
                    <CategoryTable data={categoryStore.categories} columns={categoryColumn}/>
                )
            }
        </div>
        );
}
export default CategoryList