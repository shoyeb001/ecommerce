import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {useProduct} from "@/store/productStore.js";
import ProductReview from "@/pages/product/components/ProductReview.jsx";
const DetailsTab = ()=>{
    const productStore = useProduct()
    return (
        <div className="w-full">
            <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-[400px] grid-cols-2">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="review">Review</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="w-ful min-h-[200px]">
                    <div className="h-full border-[1px] p-8 border-solid border-[#eee] rounded bg-[#fff] text-[#777]">
                        <h6 className="font-medium text-[18px]">Products Description</h6>
                        <div className="pt-3 text-[14px]">
                            <div dangerouslySetInnerHTML={{__html: productStore?.product?.longDesc}}/>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="review" className="w-ful min-h-[200px]">
                   <ProductReview/>
                </TabsContent>
            </Tabs>
        </div>
    )
}
export default DetailsTab;