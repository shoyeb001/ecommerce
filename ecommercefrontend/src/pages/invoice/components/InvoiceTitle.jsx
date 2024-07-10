import {Text, View, StyleSheet } from '@react-pdf/renderer';

const InvoiceTitle = ()=>{
    const styles = StyleSheet.create({

        titleContainer:{
            flexDirection: 'row',
            marginTop: 24,
        },
        reportTitle:{
            color: '#61dafb',
            letterSpacing: 4,
            fontSize: 18,
            textAlign: 'center',
            textTransform: 'uppercase',
        }
    });
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.reportTitle}>Invoice</Text>
        </View>
    )
}
export default InvoiceTitle;