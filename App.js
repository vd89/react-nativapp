import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const onchangeHandler = async (enteredText) => {
    await setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((courseGoals) => [...courseGoals, enteredGoal]);
  };
  const { root, input, inputContainer, listItem } = styles;
  return (
    <View style={root}>
      <View style={inputContainer}>
        <TextInput
          placeholder='Enter Course Goal'
          style={input}
          onChangeText={(text) => onchangeHandler(text)}
          value={enteredGoal}
        />
        <Button title='Add' onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map((goal) => (
          <View style={listItem} key={goal}>
            <Text> ❤️ {goal} </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 35,
  },
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
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
