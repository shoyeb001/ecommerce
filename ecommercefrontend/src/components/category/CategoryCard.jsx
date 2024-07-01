import Fruit from "@/assets/fruit.svg"
import {Link} from "react-router-dom";

const CategoryCard = ({data})=>{
    return(
        <div className="h-[150px] w-[150px] shadow">
            <Link to={`/category/${data?.slug}`}>
                <div className="flex flex-col justify-center p-6 h-full">
                    <img src={data?.image || Fruit}/>
                    <p className="text-center font-bold">{data?.name}</p>
                </div>
            </Link>
        </div>
    )
}
export default CategoryCard;