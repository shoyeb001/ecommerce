import Image from "@/assets/logo.png"
import Andriod from "@/assets/android.png"
import Apple from "@/assets/apple.png"
import {Facebook, Instagram, Mail, MapPin, Phone, Twitch, Twitter} from 'lucide-react';

const Footer = ()=>{
    return (
        <div className="w-full bg-[#fff] border-t-[1px] border-solid border-[#eee] mt-[40px] font-body">
            <div className="w-[85%] m-auto flex flex-wrap gap-8 justify-between pt-[70px] pb-[70px]">
                <div className="flex-1">
                    <img src={Image} className="w-150px"/>
                    <p className="pt-8 text-[14px] text-[#777] pb-8">Grabit is the biggest market of grocery products.
                        Get your daily needs from our store.</p>
                    <div className="w-full flex justify-center gap-4">
                        <a href="#" className="flex-1">
                            <img src={Andriod} className="w-[100%]"/>
                        </a>
                        <a href="#" className="flex-1">
                            <img src={Apple} className="w-[100%]"/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <h6 className="text-[20px] text-[#4b5966] font-medium  pb-[20px] border-b-[1px] border-solid border-[#eee]">Category</h6>
                    <div className="flex flex-col gap-2 mt-4">
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90]">Fruits</a>
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90]">Snaks & Spices</a>
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90]">Fast Food</a>
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90]">Drinks</a>
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90]">Bakery</a>
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90]">Sea Food</a>
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <h6 className="text-[20px] text-[#4b5966] font-medium  pb-[20px] border-b-[1px] border-solid border-[#eee]">Company</h6>
                    <div className="flex flex-col gap-2 mt-4">
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90]">About Us</a>
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90]">Delivery</a>
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90]">Legal Notice</a>
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90]">Terms & Condition</a>
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90]">Secure Payment</a>
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90]">Contact Us</a>
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <h6 className="text-[20px] text-[#4b5966] font-medium  pb-[20px] border-b-[1px] border-solid border-[#eee]">Account</h6>
                    <div className="flex flex-col gap-2 mt-4">
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90]">Sign In</a>
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90]">View Cart</a>
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90]">Return Policy</a>
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90]">Become a Vendor</a>
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90]">Affiliate Program</a>
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90]">Payments</a>
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <h6 className="text-[20px] text-[#4b5966] font-medium  pb-[20px] border-b-[1px] border-solid border-[#eee]">Contact</h6>
                    <div className="flex flex-col gap-2 mt-4">
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90] flex gap-4">
                            <MapPin size={50} color="#5caf90"/>
                            2548 Puratan Chawk, Ghora Sahid, 713102 - Burdwan
                        </a>
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90] flex gap-4">
                            <Mail color="#5caf90"/> skshoppingmart@gmail.com
                        </a>
                        <a href="#" className="text-[14px] text-[#777] hover:text-[#5caf90] flex gap-4">
                            <Phone color="#5caf90"/> 9568987545
                        </a>
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="h-[30px] w-[30px] bg-[#4b5966] flex items-center justify-center  rounded"><Facebook color="#fff"/></a>
                            <a href="#" className="h-[30px] w-[30px] bg-[#4b5966] flex items-center justify-center  rounded"><Twitter color="#fff"/></a>
                            <a href="#" className="h-[30px] w-[30px] bg-[#4b5966] flex items-center justify-center  rounded"><Instagram color="#fff"/></a>
                            <a href="#"  className="h-[30px] w-[30px] bg-[#4b5966] flex items-center justify-center  rounded"><Twitch color="#fff"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;