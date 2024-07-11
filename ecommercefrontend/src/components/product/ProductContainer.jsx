import {CarouselItem} from "@/components/ui/carousel.jsx";
import ProductCard from "@/components/product/ProductCard.jsx";

const ProductContainer = ({products})=>{
    return (
        <div className="w-full grid md:grid-cols-5 grid-col-1 gap-4">
            {products?.map((item, index) => (
               <ProductCard data={item}/>
            ))}
        </div>
    );
}
export default ProductContainer