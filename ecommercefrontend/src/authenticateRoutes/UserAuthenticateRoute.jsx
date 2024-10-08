import {useUser} from "@/store/userStore.js";
import {Navigate} from "react-router-dom";
import {Suspense} from "react";
import {Loader} from "lucide-react";

const UserAuthenticateRoute = ({children})=>{
    const userStore = useUser();
    const {user} = userStore;
    return user==null ?(
            <Navigate to="/login" />
    ):(
        <Suspense fallback={<Loader />}>{children}</Suspense>

    )
}
export default UserAuthenticateRoute;