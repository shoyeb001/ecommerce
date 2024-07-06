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
            <div className="flex gap-6 w-full mt-[60px]">
                <CheckoutProduct/>
                <div className="w-[70%]">
                    <OrderSection/>
                </div>
            </div>
        </div>
    )
}
export default Checkout;