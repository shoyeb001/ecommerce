import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

export const firebaseConfig = {
    apiKey: "AIzaSyAjp25S4jYQDiqeE2GusVxT0h-FQOQCbg0",
    authDomain: "ecommerce-22771.firebaseapp.com",
    projectId: "ecommerce-22771",
    storageBucket: "ecommerce-22771.appspot.com",
    messagingSenderId: "892184031233",
    appId: "1:892184031233:web:982fa3fd00a7f256fe5000"
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);