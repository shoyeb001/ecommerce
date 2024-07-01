import Autoplay from "embla-carousel-autoplay"
import {useRef} from "react";
import {Card} from "@/components/ui/card"
import {Carousel, CarouselContent, CarouselItem,} from "@/components/ui/carousel";
import FistSliderContent from "@/pages/home/components/FistSliderContent.jsx"
import {homeSliderData} from "@/constant/slidertext.js";

const HomeSlider = ()=>{
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
            <CarouselContent>
                {homeSliderData.map((item, index) => (
                    <CarouselItem key={index}>
                            <Card className="w-full h-[450px]">
                                    <FistSliderContent data={item}/>
                            </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>

        </Carousel>
    )

}
export default HomeSlider