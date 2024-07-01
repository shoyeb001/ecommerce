import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "@/components/product/ProductCard.jsx";
const ProductSlider = ()=>{
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full"
        >
            <CarouselContent>
                {Array.from({ length: 10}).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                           <ProductCard/>
                    </CarouselItem>
                ))}
            </CarouselContent>

        </Carousel>
    )
}
export default ProductSlider;