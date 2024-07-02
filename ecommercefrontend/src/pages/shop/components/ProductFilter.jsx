import {Card} from "@/components/ui/card.jsx";
import ProductCategoryFilter from "@/pages/shop/components/ProductCategoryFilter.jsx";
import PriceFilter from "@/pages/shop/components/PriceFilter.jsx";
import TagsFilter from "@/pages/shop/components/TagsFilter.jsx";
import {Button} from "@/components/ui/button.jsx";

const ProductFilter = ({filter})=>{

    return (
        <Card className="w-full flex flex-col gap-4 relative py-4 px-4">
            <div>
                <div className="border-b-[1px] border-solid border-[#eee] pb-[15px]">
                    <h3 className="font-semibold relative text-[#4b5966] text-[17px] leading-3">
                        Category
                    </h3>
                </div>
                <ProductCategoryFilter/>
            </div>
            <div>
                <div className="border-b-[1px] border-solid border-[#eee] pb-[15px] mt-4">
                    <h3 className="font-semibold relative text-[#4b5966] text-[17px] leading-3">
                        Price Range
                    </h3>
                </div>
                <PriceFilter/>
            </div>
            <div>
                <div className="border-b-[1px] border-solid border-[#eee] pb-[15px] mt-4">
                    <h3 className="font-semibold relative text-[#4b5966] text-[17px] leading-3">
                        Tags
                    </h3>
                </div>
                <TagsFilter/>
            </div>
            <div>
                <div className="mt-4">
                    <Button className="w-full" onClick={filter}>Filter</Button>
                </div>
            </div>
        </Card>
    )
}
export default ProductFilter;