import FeatureContainer from "@/pages/home/components/FeatureContainer.jsx";

const Features = () =>{
    return (
        <div className="w-full grid md:grid-cols-4 grid-col-2 gap-6">
            <FeatureContainer/>
            <FeatureContainer/>
            <FeatureContainer/>
            <FeatureContainer/>
        </div>
    )
}
export default Features;