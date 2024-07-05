import Autoplay from "embla-carousel-autoplay"
import {Carousel, CarouselContent, CarouselItem,} from "@/components/ui/carousel.jsx"
import {useRef} from "react";

const ProductImageSlider = ({thumbnail,image1,image2,image3})=>{
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="w-full">
                    <CarouselItem className="w-full h-[400px]">
                        <div className="p-1">
                          <img src={thumbnail} className="w-full h-[400px] object-contain "/>
                        </div>
                    </CarouselItem>
                <CarouselItem className="w-full h-[400px]">
                    <div className="p-1">
                        <img src={image1} className="w-full h-[400px] object-contain "/>
                    </div>
                </CarouselItem>
                <CarouselItem className="w-full h-[400px]">
                    <div className="p-1 ">
                        <img src={image2} className="w-full h-[400px] object-contain "/>
                    </div>
                </CarouselItem>
                <CarouselItem className="w-full h-[400px]">
                    <div className="p-1 ">
                        <img src={image3} className="w-full h-[400px] object-contain "/>
                    </div>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    );
}
export default ProductImageSlider;