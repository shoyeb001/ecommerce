import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"
import {Button} from "@/components/ui/button.jsx";
import {Menu} from "lucide-react";
import {Link} from "react-router-dom";

const MobileSidebar = ()=>{
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline"><Menu/></Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Main Menu</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col hap-4">
                        <Link to="/home" className="font-bold mb-2">Home</Link>
                        <Link to="/shop" className="font-bold mb-2">Shop</Link>
                        <Link to="/cart" className="font-bold mb-2">Cart</Link>
                        <Link to="/privacy" className="font-bold mb-2">Privacy-Policy</Link>
                        <Link to="/contact" className="font-bold mb-2">Contact</Link>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
export default MobileSidebar;