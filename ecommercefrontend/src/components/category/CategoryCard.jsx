import {Card} from "@/components/ui/card.jsx";
import { Apple } from 'lucide-react';
import Fruit from "@/assets/fruit.svg"
import {Link} from "react-router-dom";
const CategoryCard = ()=>{
    return(
        <div className="h-[150px] w-[150px] shadow">
            <Link to="/category">
                <div className="flex flex-col justify-center p-6 h-full">
                    <img src={Fruit}/>
                    <p className="text-center font-bold">Fruits</p>
                </div>
            </Link>
        </div>
    )
}
export default CategoryCard;