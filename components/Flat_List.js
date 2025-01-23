import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
    {
        id: 'a0',
        title: 'First Item',
    },
    {
        id: 'a1',
        title: 'Second Item',
    },
    {
        id: 'a2',
        title: 'Third Item',
    },
];

// tạo tp con để hiển thị phần tử
const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);
const renderItem = ({ item }) => (
    <Item title={item.title} ></Item>
)


const Flat_List = () => (
    <View style={styles.container}>
        <FlatList
            data={DATA}
            // được gọi trong flatList để hiển thị phần tử trong data
            // tham số item chứa dữ liệu của từng phần tử
            //renderItem={({ item }) => <Item title={item.title} />}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    </View>

);

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default Flat_List;