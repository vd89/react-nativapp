import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const { root, input, inputContainer } = styles;
  return (
    <View style={root}>
      <View style={inputContainer}>
        <TextInput placeholder='Enter Course Goal' style={input} />
        <Button title='Add' />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { padding: 35 },
  inputContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  input: { borderBottomColor: 'black', width: '80%', borderBottomWidth: 1, margin: 2, padding: 10 },
});
