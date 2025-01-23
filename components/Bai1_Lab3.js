import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Bai1_Lab3 = () => {
    return (
        <View style={styles.container}>
            
            {/* Line1 */}
            <Text style={styles.baseText}>
                Em vào đời bằng{' '}
                <Text style={[styles.boldText, colorText('red')]}>vang đỏ</Text> anh vào
                đời bằng{' '}
                <Text style={[styles.boldText, colorText('yellow')]}>nước trà</Text>
            </Text>
            {/* Line2 */}
            <Text style={styles.baseText}>
                Bằng cơn mưa thơm{' '}
                <Text style={[styles.boldText, styleText({ fontSize: 20 }), styles.italicText]}>
                    mùi đất
                </Text>{' '}
                và{' '}
                <Text style={[styleText({ fontSize: 10 }), styles.italicText]}>
                    bằng hoa dại mọc trước nhà
                </Text>
            </Text>
            {/* Line3 */}
            <Text
                style={[
                    styles.baseText,
                    styles.italicText,
                    styles.boldText,
                    colorText('gray'),
                ]}
            >
                Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
            </Text>
            {/* Line4 */}
            <Text style={styles.baseText}>
                Lý trí em là{' '}
                <Text
                    style={styleText({
                        textDecorationLine: 'underline',
                        letterSpacing: 20,
                        fontWeight: 'bold',
                    })}
                >
                    công cụ
                </Text>{' '}
                còn trái tim anh là{' '}
                <Text
                    style={styleText({
                        textDecorationLine: 'underline',
                        letterSpacing: 20,
                        fontWeight: 'bold',
                    })}
                >
                    động cơ
                </Text>
            </Text>
            {/* Line5 */}
            <Text style={[styles.baseText, styleText({ textAlign: 'right' })]}>
                Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
            </Text>
            {/* Line6 */}
            <Text
                style={[
                    styles.baseText,
                    styleText({
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'orange',
                    }),
                ]}
            >
                Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình
            </Text>
            {/* Line7 */}
            <Text
                style={[
                    styles.baseText,
                    styleText({
                        fontWeight: 'bold',
                        color: 'black',
                    }),
                ]}
            >
                Em vào đời bằng <Text style={colorText('white')}>mây trắng</Text> em
                vào đời bằng <Text style={colorText('yellow')}>nắng xanh</Text>
            </Text>
            {/* Line8 */}
            <Text
                style={[
                    styles.baseText,
                    styleText({
                        fontWeight: 'bold',
                        color: 'black',
                    }),
                ]}>
                Em vào đời bằng <Text style={colorText('yellow')}>đại lộ</Text> và con
                đường đó giờ <Text style={colorText('white')}>vắng anh</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        padding: 15,
    },
    baseText: {
        fontFamily: 'Cochin',
        color: 'white',
        fontSize: 16,
        marginTop: 10,
    },
    boldText: {
        fontWeight: 'bold',
    },
    italicText: {
        fontStyle: 'italic',
    },
    tipStyle:{
        borderWidth:1,
        borderColor:'gray',
        borderRadius:10,
        marginHorizontal:15,
        marginTop:10,
    }
});

export default Bai1_Lab3;
