import {Progress} from "@/components/ui/progress.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {useState} from "react";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {imageDb} from "@/firebase/firebaseConfig.js";
import UserSidebar from "@/components/userprofile/UserSidebar.jsx";
import toast from "react-hot-toast";
import {callApi} from "@/config/apiConfig.js";
import {useUser} from "@/store/userStore.js";

const UploadUserImage = () => {
    const [img, setImg] = useState();
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const userStore = useUser();

    async function handelChange(e){
        if (e.target.files[0]) {
            setImg(e.target.files[0]);
        }
    }
    async function upload(){
        if (img) {
            const storageRef = ref(imageDb, `user/${img?.name}`);
            const uploadTask =  uploadBytesResumable(storageRef, img);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgress(progress)
                },
                (error) => {
                    console.error("Upload error: ", error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setUrl(downloadURL);
                    });
                }
            );
        }
    }
    async function uploadImage(){
        try{
            setIsLoading(true)
            const {data} = await callApi({url:"user/update", method:"put", token:userStore?.token, data:{avatar:url}});
            userStore.updateUser(data);
            toast.success("User updated successfully");
            setIsLoading(false)
        }catch (e) {
            setIsLoading(false)
            toast.error(e?.message)
        }
    }
    return (
        <>
            <UserSidebar>
                <h2 className="font-medium">Update Profile Photo</h2>
                <div className="grid items-center gap-1.5 md:w-[50%] w-full mt-6">
                    <Input placeholder="Select User Image" onChange={handelChange} className="w-full" type="file"/>
                    <Button onClick={upload} type="button">Upload</Button>
                    {
                        progress < 100 ? (
                            <Progress value={progress}/>
                        ) : (
                            <img className="w-full h-[200px] object-contain" src={url || ""} alt="product image"/>
                        )
                    }
                </div>
                <Button className="mt-6" onClick={uploadImage} disabled={isLoading}>Update</Button>
            </UserSidebar>
        </>

    )
}
export default UploadUserImage;