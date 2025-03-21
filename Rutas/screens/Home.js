import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const images = [
    { id: 1, uri: 'https://i.pinimg.com/236x/07/c5/29/07c5291bd00a8d99b78183abb3d433a8.jpg' },
    { id: 2, uri: 'https://i.pinimg.com/736x/c8/d7/aa/c8d7aa923d5995595b04ede0a72a51a0.jpg' },
      { id: 3, uri: 'https://i.pinimg.com/474x/9b/54/5c/9b545c5dc0e7e2cc58346c2faadf1465.jpg'},
     
  
  ];

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Galería de Imágenes</Text> {/* Texto envuelto en <Text> */}
      <View style={styles.gallery}>
        {images.map((image) => (
          <Image key={image.id} source={{ uri: image.uri }} style={styles.image} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 8,
  },
});