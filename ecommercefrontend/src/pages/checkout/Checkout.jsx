import BreadCrump from "@/components/breadcrumb/BreadCrump.jsx";
import CheckoutProduct from "@/pages/checkout/components/CheckoutProduct.jsx";
import OrderSection from "@/pages/checkout/components/OrderSection.jsx";

const Checkout = ()=>{
    const links = [{
        name:"Home",
        link:"/"
    }]
    return(
        <div className="w-full mt-5">
            <BreadCrump title="Order Checkout" page="Order Checkout" links={links}/>
            <div className="flex flex-col md:flex-row md:gap-6 gap-3 w-full mt-[60px]">
                <CheckoutProduct/>
                <div className="md:w-[70%] w-full">
                    <OrderSection/>
                </div>
            </div>
        </div>
    )
}
export default Checkout;