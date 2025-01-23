import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const data = [
    {
        name: 'John Doe',
        email: 'john.doe@example.com',
        position: 'Software Engineer',
        photo: require('../assets/splash-icon.png'),
    },
    {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        position: 'Product Manager',
        photo: require('../assets/favicon.png'),
    },
    {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        position: 'UX Designer',
        photo: require('../assets/favicon.png'),
    },
    {
        name: 'Bob Brown',
        email: 'bob.brown@example.com',
        position: 'Data Scientist',
        photo: require('../assets/icon.png'),
    },
    {
        name: 'John Doe',
        email: 'john.doe11@example.com',
        position: 'Software Engineer',
        photo: require('../assets/icon.png'),
    },
    {
        name: 'Jane Smith',
        email: 'jane.smith11@example.com',
        position: 'Product Manager',
        photo: require('../assets/icon.png'),
    },
    {
        name: 'Alice Johnson',
        email: 'alice.johnson11@example.com',
        position: 'UX Designer',
        photo: require('../assets/icon.png'),
    },
    {
        name: 'Bob Brown',
        email: 'bob.brown11@example.com',
        position: 'Data Scientist',
        photo: require('../assets/icon.png'),
    },
    {
        name: 'John Doe',
        email: 'john.doe22@example.com',
        position: 'Software Engineer',
        photo: require('../assets/icon.png'),
    },
    {
        name: 'Jane Smith',
        email: 'jane.smith22@example.com',
        position: 'Product Manager',
        photo: require('../assets/icon.png'),
    },
    {
        name: 'Alice Johnson',
        email: 'alice.johnson22@example.com',
        position: 'UX Designer',
        photo: require('../assets/icon.png'),
    },
    {
        name: 'Bob Brown',
        email: 'bob.brown33@example.com',
        position: 'Data Scientist',
        photo: require('../assets/favicon.png'),
    },
];

// ContactItem 
const ContactItem = ({ contact }) => (
    <View style={styles.listItem}>
        <Image source={contact.photo } style={styles.avatar} />
        <View style={styles.bodyItem}>
            <Text style={styles.nameText}>{contact.name}</Text>
            <Text>{contact.position}</Text>
        </View>
        <TouchableOpacity style={styles.btnCall}>
            <Text style={styles.callText}>Call</Text>
        </TouchableOpacity>
    </View>
);

// PropTypes xác định kiểu dữ liệu cho ContactItem
ContactItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired, 
        email: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        photo: PropTypes.number.isRequired,
    }).isRequired,
};

const Bai1_Lab4 = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <ContactItem contact={item} />}
                keyExtractor={(item) => item.email}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        marginTop: '10%',
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    bodyItem: {
        flex: 1,
    },
    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    btnCall: {
        backgroundColor: '#007BFF',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
    callText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Bai1_Lab4;
