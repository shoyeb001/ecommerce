import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';
const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
});
const BillTo = ({order})=>{
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.billTo}>Bill To:</Text>
            <Text>{order?.firstName} {order?.lastName}</Text>
            <Text>{order?.address}, {order?.postOffice}, Pin: {order?.pin}, {order?.state}</Text>
            {/*<Text>+91 {order?.phone}</Text>*/}
            <Text>Payment Method: {order?.paymentMethod}</Text>
            <Text>Payment Status: {order?.paymentStatus}</Text>
        </View>
    )
}
export default BillTo;