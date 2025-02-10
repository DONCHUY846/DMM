import React from 'react';
import { View, StyleSheet } from 'react-native';
import BasicForm from './components/BasicForm';

// Función de validación
const validation = (values) => {
  const errors = {};

  // Validación para el nombre
  if (!values.name) {
    errors.name = 'Nombre obligatorio';
  } else if (values.name.length <= 2) {
    errors.name = 'Nombre muy corto';
  }

  // Validación para el apellido
  if (!values.apellido) {
    errors.apellido = 'Apellido obligatorio';
  } else if (values.apellido.length <= 2) {
    errors.apellido = 'Apellido muy corto';
  }

  // Validación para el número
  if (!values.numero) {
    errors.numero = 'Número obligatorio';
  } else if (values.numero.length <= 7) {
    errors.numero = 'Número muy corto';
  }

  return errors;
};

export default function App() {
  return (
    <View style={styles.container}>
      {/* Pasamos la función de validación como una prop */}
      <BasicForm validation={validation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});