import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {useCategory} from "@/store/category.js";
import {useEffect, useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button.jsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {Textarea} from "@/components/ui/textarea.jsx";
import {Switch} from "@/components/ui/switch.jsx";
import ImageUpload from "@/pages/dashboard/product/components/ImageUpload.jsx";
import {useProduct} from "@/store/product.js";
import toast from "react-hot-toast";
import {useUser} from "@/store/user.js";
import Tiptap from "@/components/editor/Tiptap.jsx";

const addProductSchema = z.object({
    title: z.string().min(10).max(200),
    thumbnail: z.string(),
    image1: z.string(),
    image2:  z.string(),
    image3:  z.string(),
    price: z.string().min(1,{
        message:"price is required"
    }),
    categoryId: z.string().min(1,{
        message:"Please choose category"
    }),
    description: z.string().min(40,{
        message:"Description should be 40 characters"
    }),
    slug: z.string().min(1,{
        message:"Slug is required"
    }),
    tags: z.string().min(1,{
        message:"tags is required"
    }),
    longDesc: z.string().min(1,{
        message:"Long description required"
    }),
    quantity: z.string().min(1,{
        message: "quantity is required"
    }),
    discountPrice: z.string(),
    isFeatures: z.boolean(),
    isActive: z.boolean(),
})

const AddProduct = ()=>{
    const productStore = useProduct();
    const categoryStore = useCategory();
    const userStore = useUser();
    const [thumb, setThumb] = useState();
    const [img1, setImg1] = useState();
    const [img2, setImg2] = useState();
    const [img3, setImg3]= useState()
    const [open, setOpen] = useState(false);
    const form = useForm({
        resolver: zodResolver(addProductSchema),
        defaultValues: {
            title:"",
            thumbnail: "",
            image1: "",
            image2:  "",
            image3: "",
            price: "",
            categoryId: "",
            description: "",
            slug:"",
            tags: "",
            isFeatures: false,
            isActive: true,
            longDesc:"",
            quantity:"",
            discountPrice:null
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values) {
        try{
          await productStore.addProduct({...values, price:Number(values.price), quantity: Number(values.quantity), discountPrice: Number(values.discountPrice), thumbnail: thumb, image1:img1, image2:img2, image3:img3},userStore?.user?.token);
          setOpen(false);
          form.reset();
        }catch (e) {

            toast.error(e?.message)
        }
    }

    useEffect(()=>{
        categoryStore.viewCategories();
    },[])
    return(
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline" onClick={()=>setOpen(true)}>Add Product</Button>
                </DialogTrigger>
                <DialogContent className="max-w-[80%] max-h-[600px] overflow-y-scroll">
                    <DialogHeader>
                        <DialogTitle>Add Product</DialogTitle>
                        <DialogDescription>
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="flex gap-4">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Product Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Product Title" {...field} />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Product Price</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Price" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </div>
                            <div className="flex gap-4">
                                <FormField
                                    control={form.control}
                                    name="thumbnail"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Thumbnail</FormLabel>
                                            <FormControl>
                                                <ImageUpload placeholder="Upload thumbnail" url={thumb} setUrl={setThumb}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="image1"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>image2</FormLabel>
                                            <FormControl>
                                                <ImageUpload placeholder="Upload image 1" url={img1} setUrl={setImg1}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </div>
                            <div className="flex gap-4">
                                <FormField
                                    control={form.control}
                                    name="image2"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Image2</FormLabel>
                                            <FormControl>
                                                <ImageUpload placeholder="Upload image 2" url={img2} setUrl={setImg2}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="image3"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Image 3</FormLabel>
                                            <FormControl>
                                                <ImageUpload placeholder="Upload image 3" url={img3} setUrl={setImg3}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </div>
                            <div className="flex gap-4">
                                <FormField
                                    control={form.control}
                                    name="longDesc"
                                    render={({ field }) => (
                                        <FormItem className="flex-1 mt-3">
                                            <FormLabel>Long Description</FormLabel>
                                            <FormControl>
                                                {/* <Textarea rows={8} placeholder="Enter Description" {...field} /> */}
                                                <Tiptap
                                                    description={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="categoryId"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Product Category</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Category" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {
                                                        categoryStore?.categories?.map((item, index)=>(
                                                            <SelectItem value={item?.id} key={index}>{item?.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex gap-4">
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Product Description</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Product description" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="slug"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Product Slug</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Product slug" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex gap-4">
                                <FormField
                                    control={form.control}
                                    name="discountPrice"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Discount Price</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="Discount Price" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="quantity"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Quantity</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="Quantity" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex gap-4">
                                <FormField
                                    control={form.control}
                                    name="tags"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Product tags</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Product tags" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="isFeatured"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm flex-1">
                                            <div className="space-y-0.5">
                                                <FormLabel>Is Featured</FormLabel>
                                            </div>
                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    aria-readonly
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    )
}
export default AddProduct;