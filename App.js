import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('lat:', position.coords.latitude);
      console.log('lug:', position.coords.longitude);
    });
  }, []);
  const onchangeHandler = async (enteredText) => {
    await setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((courseGoals) => [...courseGoals, { id: Math.random.toString(), value: enteredGoal }]);
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
        <FlatList
          data={courseGoals}
          keyExtractor={(itemData) => itemData.id}
          renderItem={(itemData) => (
            <View style={listItem}>
              <Text> ❤️ {itemData.item.value} </Text>
            </View>
          )}
        />
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
    marginVertical: 15,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
