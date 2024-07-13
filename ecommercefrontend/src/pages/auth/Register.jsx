import {Card} from "@/components/ui/card.jsx";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {Button} from "@/components/ui/button"
import {useState} from "react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea.jsx";
import {callApi} from "@/config/apiConfig.js";
import toast from "react-hot-toast";

const formSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(1,{
        message:"Please enter Last Name"
    }),
    email: z.string().min(1,{
        message:"Email is required"
    }).email(),
    password: z.string().min(8, {
        message:"Password should be mimimum 8 characters"
    }),
    phone: z.string().min(10,{
        message:"Phone No must be 10 digits"
    }),
    address: z.string().min(1,{
        message:"Address must be given"
    }),
    city: z.string().min(1,{
        message:"City is required"
    }),
    country: z.string().min(1,{
        message:"Country is required"
    }),
    state: z.string().min(1,{
        message:"State is required"
    }),
    pin: z.string().min(6,{
        message:"Pin should be minimum 6 digits"
    })
})
const Register =()=>{
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName:"",
            email:"",
            phone:"",
            address:"",
            city:"",
            country:"",
            password:"",
            state:"",
            pin:""
        },
    })
    async function onSubmit(values) {
        try {
            setIsLoading(true);
            await callApi({url:"auth/register", method:"post", data:values});
            toast.success("Registered successful");
            form.reset();
            setIsLoading(false)
        }catch (e){
            setIsLoading(false);
            toast.error(e?.response?.data?.message);
        }
    }
    return(
        <div className="w-full">
            <h6 className="font-bold text-2xl text-center mt-[40px]">Register</h6>
            <p className="text-[#777] text-[14px] text-center">Best place to buy and sell digital products.</p>
            <Card className="md:w-[80%] w-full m-auto  py-5 px-5 mt-5 rounded">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="md:flex md:gap-4">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem className="md:flex-1 mb-2">
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
                                    <FormItem className="md:flex-1 mb-2">
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Last Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="md:flex md:gap-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="md:flex-1 mb:2">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="example@gmail.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem  className="md:flex-1 mb-2">
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input  type="password" placeholder="Password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="md:flex md:gap-4">
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem className="md:flex-1">
                                        <FormLabel>Adrress</FormLabel>
                                        <FormControl>
                                            <Textarea className="h-60" {...field}></Textarea>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem className="md:flex-1">
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Phone Number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="md;flex md:gap-4">
                            <FormField
                                control={form.control}
                                name="city"
                                render={({ field }) => (
                                    <FormItem className="md:flex-1 mb-2">
                                        <FormLabel>City</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="City" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pin"
                                render={({ field }) => (
                                    <FormItem className="md:flex-1 mb-2">
                                        <FormLabel>Pin</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Pin" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="md:flex md:gap-4">
                            <FormField
                                control={form.control}
                                name="state"
                                render={({ field }) => (
                                    <FormItem className="md:flex-1 mb-2">
                                        <FormLabel>State</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="State" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="country"
                                render={({ field }) => (
                                    <FormItem className="md:flex-1 mb-2">
                                        <FormLabel>Country</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Country" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Button type="submit" className="w-full md:w-auto" disabled={isLoading}>Register</Button>
                    </form>
                </Form>
            </Card>
        </div>
    );
}
export default Register;