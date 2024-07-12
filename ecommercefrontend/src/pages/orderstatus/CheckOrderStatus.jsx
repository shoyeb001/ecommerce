import BreadCrump from "@/components/breadcrumb/BreadCrump.jsx";
import TrackOrderHeading from "@/pages/orderstatus/components/TrackOrderHeading.jsx";
import TrackOrder from "@/pages/orderstatus/components/TrackOrder.jsx";

const CheckOrderStatus = ()=>{
    const links = [{
        name:"Home",
        link:"/"
    }]
    return (
        <div className="mt-5">
            <BreadCrump title="Track Order" page="Track Order" links={links}/>
            <TrackOrderHeading/>
            <TrackOrder/>
        </div>
    )
}
export default CheckOrderStatus;