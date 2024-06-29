import {Button} from "@/components/ui/button"
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import {useState} from "react";
import {Input} from "@/components/ui/input"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import ImageUpload from "@/pages/dashboard/product/components/ImageUpload.jsx";
import {useCategory} from "@/store/category.js";
import {useUser} from "@/store/user.js";
import toast from "react-hot-toast";

const categorySchema = z.object({
    name: z.string().min(2).max(20),
    image: z.string(),
    slug: z.string().min(1,{
        message:"slug is required"
    })
})
const AddCategory = ()=>{
    const [open, setOpen] = useState(false)
    const [url, setUrl] = useState()
    const categoryStore = useCategory()
    const userStore = useUser();
    const form = useForm({
        resolver: zodResolver(categorySchema),
        defaultValues: {
            name:"",
            image:"",
            slug:""
        },
    })
    async function onSubmit(data) {
       try {
           await categoryStore.addCategory({...data, image:url}, userStore.user.token);
           form.reset();
           setOpen(false);
       }catch (e) {
           toast.error(e?.message);
       }
    }
    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Category</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Name" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category Name</FormLabel>
                                        <FormControl>
                                            <ImageUpload placeholder="category image" url={url} setUrl={setUrl}/>
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="slug"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category Slug</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Slug" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    )
}
export default AddCategory;