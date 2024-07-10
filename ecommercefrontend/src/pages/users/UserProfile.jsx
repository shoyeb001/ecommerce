import UserSidebar from "@/components/userprofile/UserSidebar.jsx";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {useUser} from "@/store/userStore.js";
import {Button} from "@/components/ui/button"
import {useState} from "react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea.jsx";
import toast from "react-hot-toast";
import {callApi} from "@/config/apiConfig.js";

const editProfileSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    avatar: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    houseName: z.string(),
    pin: z.string().min(6).max(6),
    postOffice: z.string(),
    phone: z.string().min(10).max(10)
})

const UserProfile = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const userStore = useUser();
    const {user, token, updateUser} = userStore;
    const form = useForm({
        resolver: zodResolver(editProfileSchema),
        defaultValues: {
            firstName: user?.firstName || "",
            lastName:user?.lastName || "",
            avatar: user?.avatar || "",
            email: user?.email || "",
            address:user?.address || "",
            city:user?.city || "",
            state: user?.state || "",
            country:user?.country || "",
            houseName:user?.houseName || "",
            pin:user?.pin || "",
            postOffice:user?.postOffice || "",
            phone: user?.phone || ""
        },
    })

    async function onSubmit(values) {
        try{
            setIsLoading(true)
            const {data} = await callApi({
                method: "put",
                url:"user/update",
                token: token,
                data: values
            })
            updateUser(data);
            toast.success("Information updated successfully");
            setIsLoading(false)
        }catch (e) {
            setIsLoading(false)
            toast.error(e?.message || e);
        }
    }
    return (
        <UserSidebar>
            <div>
                <h2 className="font-semibold">Profile Settings</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="flex justify-between mt-4 gap-4">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({field}) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>FirstName</FormLabel>
                                        <FormControl>
                                            <Input placeholder="First Name" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({field}) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Last Name" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex justify-between mt-4 gap-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input disabled placeholder="exmaple@gmail.com" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({field}) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Phone Number" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <h2 className="font-semibold">Address Setting</h2>
                        <div className=" mt-2">
                            <FormField
                                control={form.control}
                                name="address"
                                render={({field}) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Address</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Address" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                        </div>
                        <div className="flex justify-between mt-2 gap-4">
                            <FormField
                                control={form.control}
                                name="city"
                                render={({field}) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>City</FormLabel>
                                        <FormControl>
                                            <Input placeholder="City" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="state"
                                render={({field}) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>State</FormLabel>
                                        <FormControl>
                                            <Input placeholder="State" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                        </div>
                        <div className="flex justify-between mt-2 gap-4">
                            <FormField
                                control={form.control}
                                name="country"
                                render={({field}) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Country</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Country" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="houseName"
                                render={({field}) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>House Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="House Name" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                        </div>
                        <div className="flex justify-between mt-2 gap-4">
                            <FormField
                                control={form.control}
                                name="pin"
                                render={({field}) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Pin</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="pin" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="postOffice"
                                render={({field}) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Post Office</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Post Office" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button type="submit" disabled={isLoading}>Update</Button>
                    </form>
                </Form>
            </div>
        </UserSidebar>
    )
}
export default UserProfile;