import {Carousel, CarouselContent, CarouselItem,} from "@/components/ui/carousel"
import CategoryCard from "@/components/category/CategoryCard.jsx";
import {useEffect} from "react";
import {useCategory} from "@/store/categoryStore.js";
import toast from "react-hot-toast";
import {callApi} from "@/config/apiConfig.js";
const CategorySlider = ()=>{
    const categoryStore = useCategory();
    const getCategories = async()=>{
        try{
            const {data} = await callApi({url:"category/all", method:"get"});
            categoryStore.setCategories(data);
        }catch (e){
            toast.error(e?.message)
        }
    }
    useEffect(()=>{
        getCategories();
    },[])
    return (
        <div className="mt-[100px]">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {categoryStore?.category?.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6">
                          <CategoryCard data={item}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>

    )
}
export default CategorySlider;