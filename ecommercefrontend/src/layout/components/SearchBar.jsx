import {Button} from "@/components/ui/button.jsx";
import SearchItems from "@/layout/components/SearchItems.jsx";
import {useCallback, useState} from "react";
import {callApi} from "@/config/apiConfig.js";
import toast from "react-hot-toast";
import {debounce} from "@/lib/debounce.js";
import {Search} from "lucide-react";

const SearchBar = ()=>{
    const [products, setProducts] = useState();
    const searchProducts = async (search)=>{
        try{
            const {data} = await callApi({url:`product/search?title=${search}`, method:"get"});
            setProducts(data);
        }catch (e) {
            toast.error(e?.message)
        }
    }
    const handleSearch = useCallback(
        debounce((searchTerm) => {
            searchProducts(searchTerm);
        }, 500),
        [searchProducts]
    );
    const handleChange = (event) => {
        const searchTerm = event.target.value;
        console.log(searchTerm)
        if(searchTerm.length===0){
            setProducts(null)
        }
        if(searchTerm){
            handleSearch(searchTerm);
        }
    };
    return (
        <>
            <div
                className="relative w-full h-[50px] flex items-center  p-2 border-[1px] border-solid border-[#eee] justify-between bg-transparent">
                <input
                    className="block w-full rounded-md border-0 md:pl-8 pl-2 py-1.5 focus:outline-none focus:ring-transparent"
                    type="text"
                    placeholder="Search Product...."
                    onChange={handleChange}
                />
                <Button className="bg-transparent outline-none border-0 shadow-none hover:bg-transparent"><Search
                    className="block absolute text-gray-400"/>
                </Button>
            </div>
            <div className="w-full absolute h-auto z-20 bg-[#fff]">
                {
                    products && products?.map((item) => (
                        <SearchItems product={item} key={item?.id}/>
                    ))
                }
            </div>
        </>

    )
}
export default SearchBar;