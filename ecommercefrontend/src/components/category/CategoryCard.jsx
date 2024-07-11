import Fruit from "@/assets/fruit.svg"
import {Link} from "react-router-dom";

const CategoryCard = ({data})=>{
    return(
        <div className="md:h-[150px] h-[80px] md:w-[150px] w-[90px] shadow">
            <Link to={`/category/${data?.slug}`}>
                <div className="flex flex-col justify-center p-6 h-full">
                    <img src={data?.image || Fruit}/>
                    <p className="text-center md:font-bold font-medium text-[10px] md:text-[16px]">{data?.name}</p>
                </div>
            </Link>
        </div>
    )
}
export default CategoryCard;