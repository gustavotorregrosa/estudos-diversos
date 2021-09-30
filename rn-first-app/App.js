import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Ola mundo')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <StatusBar style="auto" />
      <Button onPress={() => {setOutputText('Ola mundo 2')}} title="Aperte Aqui" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
