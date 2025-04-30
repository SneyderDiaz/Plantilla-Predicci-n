import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Usamos los íconos de Material Icons
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
      navigation.navigate('Dashboard'); // Navega a la pantalla principal (Dashboard)
    } else {
      Alert.alert('Error', 'Credenciales incorrectas.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo EIS-SINTEM */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>EIS-SINTEM</Text>
      </View>

      <Text style={styles.title}>INICIAR SESIÓN</Text>

      {/* Campo de Correo */}
      <View style={styles.inputContainer}>
        <Icon name="email" size={20} color="#888" style={styles.icon} />
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
        <Icon name="lock" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Botón de Iniciar Sesión */}
      <CustomButton title="Iniciar Sesión" onPress={handleLogin} />

      {/* Enlace para Registro con Ícono */}
      <View style={styles.linkContainer}>
        <Icon name="person-add" size={20} color="#1E90FF" />
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('Registro')}
        >
          ¿No tienes cuenta? Regístrate aquí
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
    marginBottom: 30,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3376ff',
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    width: '80%',
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  link: {
    marginLeft: 5,
    color: '#1E90FF',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});
