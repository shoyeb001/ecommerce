import {StyleSheet, Text, View} from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
    },
    description: {
        width: '60%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    qty: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    rate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    amount: {
        width: '15%',
        textAlign: 'right',
        paddingRight: 8,
    },
});

const InvoiceTableRow = ({orders})=>{
    return(
        <>
            {
                orders?.map((item, i) =>(
                    <View style={styles.row} key={i}>
                        <Text style={styles.description}>{item?.product?.title}</Text>
                        <Text style={styles.qty}>{item?.quantity}</Text>
                        <Text style={styles.rate}>Rs: {item?.product?.discountPrice}</Text>
                        <Text style={styles.amount}>Rs: {item?.price}</Text>
                    </View>
                ))
            }

            <View style={styles.row} >
                <Text style={styles.description}>GST</Text>
                <Text style={styles.qty}></Text>
                <Text style={styles.rate}></Text>
                <Text style={styles.amount}>18%</Text>
            </View>

        </>
    )
}
export default InvoiceTableRow