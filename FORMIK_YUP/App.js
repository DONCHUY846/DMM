import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Profile';
import imageSpeed from './assets/icon-speed.png';

const Stack = createStackNavigator();

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Correo electrónico inválido')
        .required('El correo electrónico es requerido'),
    password: Yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .required('La contraseña es requerida'),
});

const Index = ({ navigation }) => {
    const [userSession, setUserSession] = useState(null);

    useEffect(() => {
        const checkSession = async () => {
            const storedEmail = await AsyncStorage.getItem('userEmail');
            if (storedEmail) {
                setUserSession(storedEmail);
                navigation.replace('Profile');
            }
        };
        checkSession();
    }, []);

    const handleLogin = async (values) => {
        if (values.email === 'admin@example.com' && values.password === '123456') {
            await AsyncStorage.setItem('userEmail', values.email);
            setUserSession(values.email);
            navigation.replace('Profile');
        } else {
            Alert.alert('Error', 'Credenciales incorrectas');
        }
    };

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={handleLogin}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View style={styles.form}>
                        <Text style={styles.title}>Formulario Formik y Yup con sesiones</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Correo electrónico"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        {touched.email && errors.email && (
                            <Text style={styles.errorText}>{errors.email}</Text>
                        )}

                        <TextInput
                            style={styles.input}
                            placeholder="Contraseña"
                            secureTextEntry
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                        {touched.password && errors.password && (
                            <Text style={styles.errorText}>{errors.password}</Text>
                        )}

                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Ingresar</Text>
                        </TouchableOpacity>
                        <Image source={imageSpeed} style={{ width: 300, height: 300, marginTop: 20 }} />
                    </View>
                )}
            </Formik>
        </View>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Index} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        paddingHorizontal: 20,
    },
    form: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 120,
        borderRadius: 10,
    },
    title: {
        color: '#e300f1',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        margin: 10,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#bbbbbb',
    },
    button: {
        width: '50%',
        justifyContent: 'center',
        backgroundColor: '#e300f1',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    errorText: {
        color: '#d2b1d4',
        fontSize: 12,
        marginBottom: 10,
    },
});

export default App;