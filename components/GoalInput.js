import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const GoalInput = ({ onAddGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const onchangeHandler = async (enteredText) => {
    await setEnteredGoal(enteredText);
  };

  const { input, inputContainer } = styles;
  return (
    <View style={inputContainer}>
      <TextInput
        placeholder='Enter Course Goal'
        style={input}
        onChangeText={(text) => onchangeHandler(text)}
        value={enteredGoal}
      />
      <Button title='Add' onPress={onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: 'black',
    width: '80%',
    borderBottomWidth: 1,
    margin: 2,
    padding: 10,
  },
});

export default GoalInput;
