import {create} from "zustand";
import toast from "react-hot-toast";
import {callApi} from "@/config/apiconfig.js";
import axios from "axios";

const initialState = {
    user:{
        firstName: localStorage.getItem("firstName") || "",
        lastName: localStorage.getItem("lastName") || "",
        email:"",
        avatar:"",
        token:localStorage.getItem("token")||"",
        role:localStorage.getItem("role")||"",
    },
    loading:false,
}
export const useUser = create((set)=>({
  ...initialState,

    login: async({email, password})=>{
      const {user } =initialState
        set({...initialState, loading:true})
        try{
            const {data} = await callApi({url:"auth/login", method:"post", data:{email, password}});
            console.log(data);
            set({user: {...user, role: data?.role, token: data?.access_token, firstName: data?.firstName, lastName: data?.lastName}, loading: false});
            localStorage.setItem("firstName",data?.firstName);
            localStorage.setItem("lastName", data?.lastName);
            localStorage.setItem("token", data?.access_token);
            localStorage.setItem("role", data?.role);
            toast.success("LoggedIn Successfully")
            return data;
        }catch (e) {
            set({...initialState, loading:false})
            toast.error(e?.response?.data?.message)
        }
    },
    logout: async ()=>{
      set({...initialState.user, loading:true});
      try{
         // await callApi({method:"get",url:"user/logout", token: initialState.user.token});
          const headers = {
              Authorization: `Bearer ${initialState?.user?.token}`,

          };
          const success = await axios.get(`/api/user/logout`,{headers});
         localStorage.clear();
         set({...initialState})
          return success;
      }catch (e) {
          set({...initialState.user, loading:false});
          toast.error(e?.response?.data?.message)
      }
    }
}))