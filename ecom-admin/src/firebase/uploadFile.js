import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import {firebaseConfig} from "@/firebase/firebaseConfig.js";
import {imageDb} from "@/firebase/firebaseConfig.js";
export const uploadFile = (file) =>{
    if (file) {
        const storageRef = ref(imageDb, `paroduct/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
            (error) => {
                console.error("Upload error: ", error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    return downloadURL;
                });
            }
        );
    }
}