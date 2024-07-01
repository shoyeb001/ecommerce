import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import CategoryCard from "@/components/category/CategoryCard.jsx";
const CategorySlider = ()=>{
    return (
        <div className="mt-[100px]">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6">
                          <CategoryCard/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>

    )
}
export default CategorySlider;