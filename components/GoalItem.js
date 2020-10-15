import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const GoalItem = ({ onDelete, title, id }) => {
  const { listItem } = styles;
  return (
    <TouchableOpacity onPress={onDelete.bind(this, id)}>
      <View style={listItem}>
        <Text> ❤️ {title} </Text>
      </View>
    </TouchableOpacity>
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
