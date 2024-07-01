import {CarouselItem} from "@/components/ui/carousel.jsx";
import ProductCard from "@/components/product/ProductCard.jsx";

const ProductContainer = ()=>{
    return (
        <div className="w-full grid grid-cols-5 gap-4">
            {Array.from({ length: 10}).map((_, index) => (
               <ProductCard key={index}/>
            ))}
        </div>
    );
}
export default ProductContainer