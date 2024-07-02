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
        <Card className="w-full py-4 px-4  rounded">
            <div className="flex justify-between">
                <div>
                    <h6 className="font-bold">{title}</h6>
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