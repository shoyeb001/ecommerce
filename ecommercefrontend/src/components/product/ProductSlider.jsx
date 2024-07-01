import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import ProductCard from "@/components/product/ProductCard.jsx";
const ProductSlider = ({products})=>{
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full"
        >
            <CarouselContent>
                {products?.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                           <ProductCard data={item}/>
                    </CarouselItem>
                ))}
            </CarouselContent>

        </Carousel>
    )
}
export default ProductSlider;