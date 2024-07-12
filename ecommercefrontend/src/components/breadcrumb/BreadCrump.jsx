import {Card} from "@/components/ui/card.jsx";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {Link} from "react-router-dom";
const BreadCrump = ({title, page, links})=>{
    return (
        <>
        <Card className="w-full md:py-4 py-2 md:px-4 px-2 rounded">
            <div className="flex justify-between">
                <div>
                    <h6 className="font-bold text-[15px] ">{title}</h6>
                </div>
                <div>
                    <Breadcrumb>
                        <BreadcrumbList>
                            {
                                links?.map((item, index)=>(
                                    <span key={index} className="flex gap-2 items-center">
                                          <BreadcrumbItem key={index}>
                                            <BreadcrumbLink>
                                                <Link to={item?.link}>{item?.name}</Link>
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator />
                                    </span>

                                ))
                            }

                            <BreadcrumbItem>
                                <BreadcrumbPage  className="text-[#5caf90]">{page}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        </Card>
        </>
    )
}
export default BreadCrump;