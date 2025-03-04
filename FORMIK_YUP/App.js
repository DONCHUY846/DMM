import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import imageSpeed from './assets/icon-speed.png';
// Esquema de validación con Yup
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Correo electrónico inválido')
        .required('El correo electrónico es requerido'),
    password: Yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .required('La contraseña es requerida'),
});

const Index = () => {
    const handleLogin = (values) => {
        if (values.email === 'admin@example.com' && values.password === '123456') {
            Alert.alert('Login exitoso', 'Bienvenido a la aplicación');
        } else {
            Alert.alert('Error', 'Credenciales incorrectas');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Formulario Formik y Yup</Text>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={handleLogin}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <>
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder="Correo electronico"
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
                        <Image source={imageSpeed} style={{ width: 300, height: 300 , marginTop : 20 }} />
                        </View>
                       
                    </>
                )}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
       padding:100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        paddingHorizontal: 20,
    },
    form: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '20px 20px 20px 10px  rgba(255, 255, 255, 0.3)',
      padding: 120,
      borderRadius: 10,
     
      
    },
    title: {
      color: '#e300f1',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom:-90,
    },
    input: {
        width: '100%',
        boxShadow: '5px 5px 20px 10px  rgba(255, 255, 255, 0.3)',
        margin:10,
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

export default Index;