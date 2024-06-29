import {Input} from "@/components/ui/input.jsx";
import {useState} from "react";
import {Button} from "@/components/ui/button.jsx";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {imageDb} from "@/firebase/firebaseConfig.js";
import {Progress} from "@/components/ui/progress.jsx";
const ImageUpload = ({placeholder, url, setUrl})=>{
    const [img, setImg] = useState();
    const [progress, setProgress] = useState(0);

    async function handelChange(e){
        if (e.target.files[0]) {
            setImg(e.target.files[0]);
        }
    }
    async function upload(){
        if (img) {
            const storageRef = ref(imageDb, `product/${img?.name}`);
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
    return (
        <>
            <div className="w-full grid items-center gap-1.5">
                <Input  placeholder={placeholder} onChange={handelChange} className="w-full" type="file"/>
                <Button onClick={upload} type="button">Upload</Button>
                {
                    progress<100 ?(
                        <Progress value={progress}/>
                    ):(
                        <img className="w-full h-[200px] object-contain" src={url || ""}  alt="product image"/>
                    )
                }
          </div>
        </>
    );
}

export default ImageUpload;