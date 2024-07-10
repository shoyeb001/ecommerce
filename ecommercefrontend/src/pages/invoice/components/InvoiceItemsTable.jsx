import {View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from "@/pages/invoice/components/InvoiceTableHeader.jsx";
import InvoiceTableRow from "@/pages/invoice/components/InvoiceTableRow.jsx";
import InvoiceTableBlankSpace from "@/pages/invoice/components/InvoiceTableBlankSpace.jsx";
import InvoiceTableFooter from "@/pages/invoice/components/InvoiceTableFooter.jsx";
const tableRowsCount = 11;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#bff0fd',
    },
});
const InvoiceItemsTable = ({order})=>{
    return (
        <View style={styles.tableContainer}>
            <InvoiceTableHeader />
            <InvoiceTableRow orders={order?.OrderItems}/>
            {/*<InvoiceTableBlankSpace rowsCount={ order?.OrderItems?.length - 3} />*/}
            <InvoiceTableFooter order={order}/>
        </View>
    )
}
export default InvoiceItemsTable;