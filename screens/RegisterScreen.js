import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, SafeAreaView } from 'react-native';
import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Usamos íconos de Material Icons

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert('Error', 'Por favor completa todos los campos.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Las contraseñas no coinciden.');
            return;
        }

        Alert.alert('¡Registro exitoso!', 'Tu cuenta ha sido creada.');
        navigation.navigate('Login'); // Vuelve al login
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Logo EIS-SINTEM */}
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>EIS-SINTEM</Text>
            </View>

            <Text style={styles.title}>CREAR CUENTA</Text>

            {/* Campo de Correo */}
            <View style={styles.inputContainer}>
                <Icon name="email" size={20} color="#3376ff" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Correo electrónico"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            {/* Campo de Contraseña */}
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#3376ff" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            {/* Campo de Confirmar Contraseña */}
            <View style={styles.inputContainer}>
                <Icon name="lock-outline" size={20} color="#3376ff" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Confirmar Contraseña"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
            </View>

            <CustomButton
                title="Registrarse"
                onPress={handleRegister}
            />

            {/* Enlace para iniciar sesión con ícono */}
            <View style={styles.linkContainer}>
                <Icon name="login" size={20} color="#1E90FF" />
                <Text
                    style={styles.link}
                    onPress={() => navigation.navigate('Login')}
                >
                    ¿Ya tienes cuenta? Inicia sesión aquí
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    logoContainer: {
        marginBottom: 40,
        alignItems: 'center',
    },
    logoText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#3376ff',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#3376ff'
    },
    inputContainer: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    inputIcon: {
        marginLeft: 10,
    },
    input: {
        flex: 1,
        height: '100%',
        paddingLeft: 10,
        fontSize: 16,
        color: '#000',
    },
    linkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    link: {
        marginLeft: 5,
        color: '#1E90FF',
        textDecorationLine: 'underline',
        fontSize: 16,
    },
});
