import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const GoalItem = (props) => {
  const { listItem } = styles;
  return (
    <View style={listItem}>
      <Text> ❤️ {props.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 15,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
