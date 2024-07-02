import {Checkbox} from "@/components/ui/checkbox.jsx";
import {tagsData} from "@/constant/tagsData.js";
import {useProduct} from "@/store/productStore.js";
const TagsFilter = ()=> {
    const productStore = useProduct()
    const {filter, setTagsFilter} = productStore;
    const handelCheckChange = (tag)=>{
        if(filter.tags.includes(tag)){
            return setTagsFilter(filter.tags?.filter((item)=>item!==tag))
        }else{
            return setTagsFilter([...filter.tags, tag])
        }
    }
    return (
        <div className="flex gap-2 mt-4 w-full flex-wrap">

            {
                tagsData && tagsData?.map((tag, index) => (
                    <div className="flex items-center space-x-3" key={index}>
                        <Checkbox checked={filter.tags.includes(tag)}
                                  onCheckedChange={() => handelCheckChange(tag)}/>
                        <label className="text-[#777] text-sm leading-3 capitalize cursor-pointer ">
                            {tag}</label>
                    </div>
                ))
            }
        </div>
    );

}
export default TagsFilter;