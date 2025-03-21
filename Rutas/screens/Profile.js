import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ navigation }) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');

  const handleSave = () => {
    console.log({ name, dob, age, gender, address });

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Nacimiento"
        value={dob}
        onChangeText={setDob}
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Sexo"
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        style={styles.input}
        placeholder="Dirección"
        value={address}
        onChangeText={setAddress}
      />

      <Button title="Guardar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});