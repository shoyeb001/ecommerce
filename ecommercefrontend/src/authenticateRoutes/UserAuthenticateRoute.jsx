import {useUser} from "@/store/userStore.js";
import {Navigate} from "react-router-dom";
import {Suspense, useState} from "react";
import {Loader} from "lucide-react";
import {useEffect} from "react";
const UserAuthenticateRoute = ({children})=>{
    const userStore = useUser();
    const {token} = userStore;
    console.log(token, "token")
    return token===null ?(
            <Navigate to="/login" />
    ):(
        <Suspense fallback={<Loader />}>{children}</Suspense>

    )
}
export default UserAuthenticateRoute;