import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {useProduct} from "@/store/productStore.js";

const ProductPagination = ()=>{
    const productStore = useProduct();
    const {total, setPagination, filter} = productStore;
    return(
        <div className="mt-6">
            <Pagination>
                <PaginationContent>
                    {
                        filter.page>1 && (
                            <PaginationItem>
                                <PaginationPrevious className="cursor-pointer" onClick={()=>setPagination(filter.page-1)}/>
                            </PaginationItem>
                        )
                    }

                    {
                        [...Array(Math.round(total/6))]?.map((_,index)=>(
                            <PaginationItem key={index}>
                                <PaginationLink className="cursor-pointer" onClick={()=>setPagination(index+1)} isActive={filter.page === index+1}>{index+1}</PaginationLink>
                            </PaginationItem>
                        ))
                    }

                    {
                        filter.page<total/filter.limit && (
                            <PaginationItem>
                                <PaginationNext className="cursor-pointer" onClick={()=>setPagination(filter.page+1)}/>
                            </PaginationItem>
                        )
                    }

                </PaginationContent>
            </Pagination>
        </div>
    )
}
export default ProductPagination;