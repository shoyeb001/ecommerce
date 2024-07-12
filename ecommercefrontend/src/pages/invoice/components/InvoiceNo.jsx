import {StyleSheet, Text, View} from '@react-pdf/renderer';
import dateFormat from "@/lib/dateFormat.js";

const styles = StyleSheet.create({
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'flex-end'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDate: {
        fontSize: 12,
        fontStyle: 'bold',
    },
    label: {
        width: 60
    }

});

const InvoiceNo = ({order})=>{
    return (
        <>
            <View style={styles.invoiceNoContainer}>
                <Text style={styles.label}>Invoice No:</Text>
                <Text style={styles.invoiceDate}>#{order?.orderId}</Text>
            </View >
            <View style={styles.invoiceDateContainer}>
                <Text style={styles.label}>Date: </Text>
                <Text >{dateFormat(order?.createdAt)}</Text>
            </View >
        </>
    )
}
export default InvoiceNo;