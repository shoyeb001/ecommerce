import {Document, Image, Page, PDFViewer, StyleSheet} from "@react-pdf/renderer";
import InvoiceTitle from "@/pages/invoice/components/InvoiceTitle.jsx";
import InvoiceNo from "@/pages/invoice/components/InvoiceNo.jsx";
import BillTo from "@/pages/invoice/components/BillTo.jsx";
import InvoiceItemsTable from "@/pages/invoice/components/InvoiceItemsTable.jsx";
import InvoiceThankMessage from "@/pages/invoice/components/InvoiceThankMessage.jsx";
import Logo from "@/assets/logo.png"
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useOrder} from "@/store/orderStore.js";
import toast from "react-hot-toast";
import {callApi} from "@/config/apiConfig.js";
import {useUser} from "@/store/userStore.js";

const Invoice = ()=>{
    const orderStore = useOrder();
    const {setInvoice, order} = orderStore;
    const {id} = useParams();
    const userStore = useUser();
    const {user, token} = userStore;
    const viewInvoice = async()=>{
        try {
            const {data} = await callApi({url:`user/order/details?orderId=${id}`, method:"get", token: token});
            setInvoice(data);
        }catch (e){
            toast.error(e?.message)
        }
    }
    useEffect(()=>{
        if(token){
            viewInvoice();
        }
    },[id, token])
    const styles = StyleSheet.create({
        page: {
            fontFamily: 'Helvetica',
            fontSize: 11,
            paddingTop: 30,
            paddingLeft:60,
            paddingRight:60,
            lineHeight: 1.5,
            flexDirection: 'column',
        },
        logo: {
            width: 74,
            height: 66,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    });

    return (
        <div className="h-[100vh]">
            <PDFViewer
                showToolbar={true}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <Document>
                    <Page size="A4" style={styles.page}>
                        <Image style={styles.logo} src={Logo}/>
                        <InvoiceTitle/>
                        <InvoiceNo order={order}/>
                        <BillTo order={order}/>
                        <InvoiceItemsTable order={order}/>
                        <InvoiceThankMessage firstName={order?.firstName} lastName={order?.lastName}/>
                    </Page>
                </Document>
            </PDFViewer>
        </div>
    )
}
export default Invoice;