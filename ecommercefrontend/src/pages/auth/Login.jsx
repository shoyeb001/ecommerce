import {Card, CardContent} from "@/components/ui/card.jsx";
import Image from "@/assets/login.png"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Link, useNavigate} from "react-router-dom";
import {callApi} from "@/config/apiConfig.js";
import {useUser} from "@/store/userStore.js";
import toast from "react-hot-toast";
import {useState} from "react";

const loginSchema = z.object({
    email: z.string().min(2).max(50).email(),
    password: z.string().min(8).max(),
})

const Login = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const userStore = useUser();
    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password:""
        },
    })
    async function onSubmit(values) {
        try {
            setIsLoading(true);
            const {data} = await callApi({url:"auth/login", method:"post", data:values});
            console.log(data,"data")
            userStore.setLoginUser({...data, token: data?.access_token});
            localStorage.setItem("token", data.access_token)
            setIsLoading(false);
            navigate("/");
            toast.success("Login successfull");
        }catch (e) {
            setIsLoading(false);
            toast.error(e?.response?.data?.message)
        }
    }


    return(
        <div className="md:w-[80%] w-full m-auto">
            <h3 className="font-bold text-2xl text-center mt-4">Login</h3>
            <p className="text-[14px] text-[#777] text-center">Get access to your Orders, Wishlist and Recommendations.</p>
            <div className="grid grid-col-1 md:grid-cols-2 gap-4 mt-8">
                <div className="w-full">
                    <Card className="rounded">
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({field}) => (
                                            <FormItem className="mt-8">
                                                <FormLabel>Email Address</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Email" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Password" type="password" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <p className="text-[#777] text-end text-[14px]">Forget Password?</p>
                                    <div className="flex justify-between items-center">
                                        <Link to="/register" className="text-[14px] text-[#777] hover:text-[#5caf90]">Create Account</Link>
                                        <Button disabled={isLoading} className="w-full md:w-auto" type="submit">Login</Button>
                                    </div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
                <div className="w-full hidden md:block rounded">
                    <img src={Image} className="w-full overflow-hidden"/>
                </div>
            </div>
        </div>
    )
}
export default Login;