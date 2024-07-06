import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {Button} from "@/components/ui/button"
import CASH from "@/assets/cash.webp";
import ONLINE from "@/assets/online.jpg"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea.jsx";
import {useUser} from "@/store/userStore.js";


const formSchema = z.object({
    paymentMethod: z.enum(["CASH", "ONLINE"], {
        required_error: "You need to select a notification type.",
    }),
    firstName: z.string({
        required_error:"First name is required"
    }),
    lastName: z.string({
        required_error:"Last name is required"
    }),
    address: z.string({
        required_error:"Address is required"
    }),
    city: z.string({
        required_error:"City is required"
    }),
    state:z.string({
        required_error:"State is required"
    }),
    country: z.string({
        required_error:"Country is required"
    }),
    houseName: z.string({
        required_error:"House Name is required"
    }),
    pin: z.string({
        required_error:"pin is requited"
    }),
    postOffice: z.string({
        required_error:"Post Office is required"
    }),
})
const OrderSection = ()=>{
    const userStore = useUser();
    const {user} = userStore;
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            paymentMethod: "",
            firstName:user?.firstName || "",
            lastName:user?.lastName||"",
            address:user?.address||"",
            city: user?.city || "",
            state: user?.state || "",
            country: user?.country || "",
            houseName:user?.houseName ||"",
            pin:user?.pin || "",
            postOffice:user?.postOffice ||"",
        },
    })
    function onSubmit(values) {

        console.log(values)
    }
    return (
        <div className="w-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="w-full border-[1px] border-solid border-[#eee] p-4">
                        <FormField
                            control={form.control}
                            name="paymentMethod"
                            render={({field}) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>Choose Payment Method</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <div
                                                    className="w-full flex justify-between h-[90px]  border-[1px] border-solid border-[#eee]">
                                                    <div className="p-4 flex items-center">
                                                        <img src={CASH} className="w-[100px] h-full object-contain"/>
                                                        <span>Cash on Delivery</span>
                                                    </div>
                                                    <div className="flex items-center p-4">
                                                        <FormControl>
                                                            <RadioGroupItem value="CASH"/>
                                                        </FormControl>
                                                    </div>
                                                </div>

                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <div
                                                    className="w-full flex justify-between h-[90px]  border-[1px] border-solid border-[#eee]">
                                                    <div className="p-4 flex items-center">
                                                        <img src={ONLINE} className="w-[100px] h-full object-contain"/>
                                                        <span>Cash on Delivery</span>
                                                    </div>
                                                    <div className="flex items-center p-4">
                                                        <FormControl>
                                                            <RadioGroupItem value="ONLINE"/>
                                                        </FormControl>
                                                    </div>
                                                </div>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="w-full border-[1px] border-solid border-[#eee] p-4">
                        <h2 className="text-[#4b5966] font-semibold">Shipping Details</h2>
                        <div className="flex gap-4 justify-between mb-3 mt-3">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="First Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Last Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem className="mb-3">
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Textarea className="h-40" placeholder="Address" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex gap-4 justify-between mb-3">
                            <FormField
                                control={form.control}
                                name="city"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>City</FormLabel>
                                        <FormControl>
                                            <Input  placeholder="City" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="state"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>State</FormLabel>
                                        <FormControl>
                                            <Input  placeholder="State" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex justify-between gap-4 mb-3">
                            <FormField
                                control={form.control}
                                name="country"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Country</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Country" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="houseName"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>House Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="House Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex justify-between gap-4 mb-3">
                            <FormField
                                control={form.control}
                                name="pin"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Pin</FormLabel>
                                        <FormControl>
                                            <Input  type="number" placeholder="Pin" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="postOffice"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Post Office</FormLabel>
                                        <FormControl>
                                            <Input  placeholder="Post Office" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                    </div>
                        <Button type="submit" className=" bg-[#5caf90] hover:bg-[#4b5966]">Checkout Now</Button>
                </form>
            </Form>
        </div>
);
}
export default OrderSection;