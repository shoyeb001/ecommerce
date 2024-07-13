import axios from "axios";
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const callApi = async ({url, data,method, token}) =>{

    return axios({
        method: method,
        url: `https://ecommerce-sandy-nine.vercel.app/api/${url}`,
        // url: `http://localhost:3000/api/${url}`,
        data: data,
        headers: {
            'Authorization': `Bearer ${token}`, // Replace authToken with your actual token
            'Content-Type': 'application/json' // Add other headers as needed
        },
        withCredentials:true
    });
}
