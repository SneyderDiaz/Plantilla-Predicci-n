import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función para validar la contraseña
  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return minLength && hasSpecialChar;
  };

  // Manejar el inicio de sesión
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    // Convertir correo y contraseña a minúsculas
    const normalizedEmail = email.toLowerCase();
    const normalizedPassword = password.toLowerCase(); // Si necesitas comparar directamente con caracteres específicos en minúscula

    // Validar contraseña
    if (!validatePassword(password)) {
      Alert.alert(
        'Error',
        'La contraseña debe tener al menos 8 caracteres y un carácter especial.'
      );
      return;
    }

    // Simulación de login exitoso
    if (normalizedEmail === 'user@gmail.com' && normalizedPassword === 'usuario12345,') {
      Alert.alert('¡Bienvenido!', 'Inicio de sesión exitoso.');
      navigation.navigate('Inicio'); // Navega a la pantalla principal (Dashboard)
    } else {
      Alert.alert('Error', 'Credenciales incorrectas.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton
        title="Iniciar Sesión"
        onPress={handleLogin}
      />
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Registro')}
      >
        ¿No tienes cuenta? Regístrate aquí
      </Text>
    </View>
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3376ff',
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  link: {
    marginTop: 16,
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
});
