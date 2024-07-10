import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.jsx";
import {Button} from "@/components/ui/button.jsx";
import dateFormat from "@/lib/dateFormat.js";
import {Link} from "react-router-dom";

const OrderCard = ({order}) => {
    return (
        <div className="mt-3 border-[1px] border-[#eee] border-solid rounded">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-justify hover:no-underline">
                        <div className="p-4 w-full flex gap-4">
                            <div className="flex w-[50%] justify-between">
                                <div className="flex gap-5">
                                    <div className="flex flex-col gap-1">
                                        <span>Order Id</span>
                                        <span className="text-[#777]">#{order?.orderId}</span>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex flex-col gap-1">
                                        <span>Order Placed</span>
                                        <span className="text-[#777]">{dateFormat(order?.createdAt)}</span>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="flex flex-col gap-1">
                                        <span>Total Amount</span>
                                        <span>Rs: {order?.gstPrice}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[50%] flex items-end justify-end gap-3">
                               <Link to={`/order/invoice/${order?.id}`}>
                                   <Button variant="outline">View Invoice</Button>
                               </Link>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-0">
                        {
                            order?.OrderItems?.map((item, index) => (
                                <div className="card border-[1px] border-solid border-[#eee]">
                                    <div className="flex gap-4 p-4">
                                        <div className="w-[25%] h-[200] overflow-hidden">
                                            <img src={item?.product?.thumbnail} alt="product" className="w-full h-full object-contain"/>
                                        </div>
                                        <div className="w-[75%]">
                                            <div className="flex justify-between w-full">
                                                <h6 className="font-medium w-auto text-[18px]">{item?.product?.title}</h6>
                                                <span className="font-medium text-[18px]">Rs {item?.product?.discountPrice?.toFixed(2)}</span>
                                            </div>
                                            <p className="text-[#777] mt-3">{item?.product?.description}</p>
                                            <Link to={`/product/${item?.product?.slug}`}>
                                                <Button className="mt-3">View Product</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
export default OrderCard;