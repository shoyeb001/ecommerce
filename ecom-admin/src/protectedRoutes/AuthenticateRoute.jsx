import {useUser} from "@/store/user.js";
import {Suspense} from "react";
import {Loader} from "lucide-react";
import {Navigate} from "react-router-dom";
const AuthenticateRoute = ({children} )=>{
    const userStore = useUser();
    const token = userStore?.user?.token;
    const role = userStore?.user?.role
    return token && role=="ADMIN" ? (
            <>
                {" "}
                <Suspense fallback={<Loader />}>{children}</Suspense>
            </>

    ) : (
        <Navigate to="/" />
    );
}
export default AuthenticateRoute