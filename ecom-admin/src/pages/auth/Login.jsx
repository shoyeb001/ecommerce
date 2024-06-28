import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {useUser} from "@/store/user.js";
import {useNavigate} from "react-router-dom";

const loginSchema = z.object({
    email: z.string().email().min(1,{
        message:"Please enter email"
    }),
    password:z.string().min(6,{
        message:"Minimum 6 character required"
    })
})
const Login = () => {
    const navigate = useNavigate();
    const userData = useUser();
    const loginForm = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email:"",
            password:""
        },
    })
     async function onSubmit(values) {
         const data = await userData.login({email: values.email, password: values.password})
         if(data){
             navigate("/dashboard/products")
         }
    }

  return (
      <Card className="w-[350px] m-auto mt-[150px]">
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
          <CardDescription>Login Admin</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={loginForm.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="email" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                        <FormField
                            control={loginForm.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Paasword</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={userData.loading} className="w-full">Login</Button>
                </form>
            </Form>
        </CardContent>
      </Card>
)
}

export default Login