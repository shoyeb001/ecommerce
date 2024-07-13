import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import toast from "react-hot-toast";
import {callApi} from "@/config/apiconfig.js";
import {useUser} from "@/store/user.js";
import {useState, useEffect} from "react";
const User = ()=>{
    const userStore = useUser();
    const [data, setData] = useState();
    const getUsers = async ()=>{
        try{
            const {data} = await callApi({url:"admin/users/view", method:"get", token:userStore.user.token});
            setData(data)
        }catch (e){
            toast.error(e?.message)
        }
    }

    useEffect(()=>{
        getUsers()
    },[])
    return (
        <div className="w-[95%] m-auto">
            <h6 className="font-bold mb-3">Manage Users</h6>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">#ID</TableHead>
                        <TableHead>First Name</TableHead>
                        <TableHead>Last Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>State</TableHead>
                        <TableHead>Country</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((user, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">#{index+1}</TableCell>
                            <TableCell>{user?.firstName}</TableCell>
                            <TableCell>{user?.lastName}</TableCell>
                            <TableCell>{user?.email}</TableCell>
                            <TableCell>{user?.state}</TableCell>
                            <TableCell>{user?.country}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </div>
    )
}
export default User;