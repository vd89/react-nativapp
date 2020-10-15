import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const onchangeHandler = async (enteredText) => {
    await setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  const { input, inputContainer, buttonContainer, button } = styles;
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={inputContainer}>
        <TextInput
          placeholder='Enter Course Goal'
          style={input}
          onChangeText={(text) => onchangeHandler(text)}
          value={enteredGoal}
        />
        <View style={buttonContainer}>
          <View style={button}>
            <Button title='Cancel' color='red' onPress={onCancel} />
          </View>
          <View style={button}>
            <Button title='Add' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: 'black',
    width: '80%',
    borderBottomWidth: 1,
    margin: 2,
    marginBottom: 10,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    alignItems: 'center',
    textAlign: 'center',
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;
