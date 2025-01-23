import React, { useState } from 'react';
import {
    View, TextInput, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Image
} from 'react-native';

const Bai3_Lab4 = () => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.greeting}>Hi Welcome Back! 👋</Text>
                <Text style={styles.subHeader}>Hello again, you have been missed!</Text>

                <Image source={require('../assets/icon.png')} style={styles.image} />

                <Text style={styles.subHeader}>Your email</Text>
                <TextInput placeholder="Enter your email address" style={styles.input} value={email} onChangeText={setEmail} />

                <Text style={styles.subHeader}>Your password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        placeholder="Enter your password"
                        style={styles.input}
                        secureTextEntry={!isPasswordShown}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity style={{ height: '100%', width: 30, position: 'absolute', right: 30, top: 0 }}>
                        <Image style={{ height: '100%', width: '100%' }} resizeMode='contain' source={require('../icons/ic_visibility.png')} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.footerText}>Or Login with</Text>
                <View style={styles.footer}>
                    {['Facebook', 'Google'].map((platform) => (
                        <TouchableOpacity key={platform} style={styles.socialButton}>
                            <Text style={styles.socialText}>{platform}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity style={styles.registerLink}>
                    <Text style={styles.registerText}>
                        Don't have an account? <Text style={styles.boldText}>Register</Text>
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    scrollContainer: { justifyContent: 'center' },
    greeting: { fontSize: 24, fontWeight: 'bold' },
    subHeader: { fontSize: 16, color: '#777' },
    image: { width: 100, height: 100, alignSelf: 'center', marginBottom: 20 },
    input: { flex: 1, padding: 10, fontSize: 16, borderWidth: 1, borderColor: '#ccc', borderRadius: 32, },
    passwordContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
    eyeIcon: { padding: 10 },
    loginButton: { backgroundColor: '#007BFF', paddingVertical: 12, borderRadius: 5, alignItems: 'center', marginBottom: 20 },
    buttonText: { color: '#fff', fontSize: 18 },
    footerText: { marginBottom: 10, textAlign: 'center' },
    footer: { flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' },
    socialButton: { backgroundColor: '#ccc', paddingVertical: 10, width: '30%', borderRadius: 5, alignItems: 'center' },
    socialText: { fontSize: 16, color: '#000' },
    registerLink: { alignItems: 'center' },
    registerText: { fontSize: 14, color: '#007BFF' },
    boldText: { fontWeight: 'bold' },
});

export default Bai3_Lab4;
