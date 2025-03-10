import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ navigation }) => {
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        const getUserData = async () => {
            const storedEmail = await AsyncStorage.getItem('userEmail');
            if (storedEmail) {
                setUserEmail(storedEmail);
            } else {
                navigation.replace('Login');
            }
        };
        getUserData();
    }, []);

    const handleLogout = async () => {
        await AsyncStorage.removeItem('userEmail');
        navigation.replace('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenido, {userEmail}</Text>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#e300f1',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Profile;
