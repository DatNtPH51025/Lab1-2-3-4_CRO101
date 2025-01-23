import React, { useState } from 'react';
import { StatusBar, ScrollView, RefreshControl, StyleSheet, Text, View } from 'react-native';

const Bai2_Lab4 = () => {
    // State quản lý trạng thái của StatusBar và RefreshControl
    const [barStyle, setBarStyle] = useState('light-content'); // Kiểu hiển thị nội dung StatusBar
    const [backgroundColor, setBackgroundColor] = useState('transparent'); // Màu nền của StatusBar
    const [refreshing, setRefreshing] = useState(false); // Trạng thái "đang làm mới"

    // Hàm xử lý sự kiện kéo để làm mới
    const onRefresh = () => {
        setRefreshing(true); // Hiển thị loading
        setTimeout(() => {
            const newColor = backgroundColor === 'transparent' ? '#ff6347' : '#32cd32'; // Thay đổi màu nền
            setBackgroundColor(newColor);

            setBarStyle((prevStyle) =>
                prevStyle === 'light-content' ? 'dark-content' : 'light-content'
            );

            setRefreshing(false); // Tắt loading
        }, 1500); 
    };

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            <StatusBar
                barStyle={barStyle}
                translucent
                backgroundColor={backgroundColor} 
            />
            <Text style={styles.text}>Kéo xuống để thay đổi màu StatusBar</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, 
        justifyContent: 'center', 
        paddingVertical: 200, 
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center', 
    }
});

export default Bai2_Lab4;
