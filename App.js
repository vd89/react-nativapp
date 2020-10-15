import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import { GoalItem } from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('lat:', position.coords.latitude);
      console.log('lug:', position.coords.longitude);
    });
  }, []);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((courseGoals) => [...courseGoals, { id: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  };
  const removeGoalHandler = (goalId) => {
    setCourseGoals((courseGoals) => {
      return courseGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };
  const { root } = styles;
  return (
    <View style={root}>
      <Button title='Add new Goal' onPress={() => setIsAddMode(true)} />

      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
      <FlatList
        data={courseGoals}
        keyExtractor={(itemData) => itemData.id}
        renderItem={(itemData) => (
          <GoalItem title={itemData.item.value} id={itemData.item.id} onDelete={removeGoalHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 35,
  },
});
