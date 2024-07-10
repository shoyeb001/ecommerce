import UserSidebar from "@/components/userprofile/UserSidebar.jsx";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import toast from "react-hot-toast";
import {callApi} from "@/config/apiConfig.js";
import {useUser} from "@/store/userStore.js";
import {useState} from "react";

const passwordSchema = z.object({
    oldPassword: z.string({
        required_error:"Enter your old password"
    }).min(8),
    newPassword: z.string({
        required_error:"Enter your new password"
    }).min(8),
    confirmPassword: z.string({
        required_error:"Enter your confirm password"
    }).min(8),
})
const ChangePassword = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const userStore = useUser();
    const {user, updateUser} = userStore;
    const form = useForm({
        resolver: zodResolver(passwordSchema),
        defaultValues: {
            oldPassword:"",
            newPassword:"",
            confirmPassword:""
        },
    })

    async function onSubmit(values) {
        console.log(values)
        const {oldPassword, newPassword, confirmPassword} = values;
        if(confirmPassword!==newPassword){
            toast.error("New password and confirm password does not match")
        }else{
            try{
                setIsLoading(true);
                const {data} = await callApi({url:"user/password/update", method:"put", data:{oldPassword, newPassword}, token:user?.token})
                updateUser(data);
                setIsLoading(false);
                toast.success("Password updated successfully");
            }catch (e){
                setIsLoading(false);
                toast.error(e?.response?.data?.message);
            }
        }
    }
    return(
        <>
        <UserSidebar>
            <h2 className="font-semibold">Change Password</h2>
            <div className="w-[50%] mt-5">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="oldPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Old Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Old Password" type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="newPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>New Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="New Password" type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Confirm Passowrd" type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={isLoading}>Update Password</Button>
                    </form>
                </Form>
            </div>
        </UserSidebar>
        </>
    )
}
export default ChangePassword;