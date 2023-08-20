import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export interface TaskItemProps {
  task: string;
  done: boolean;
  onDoneToggle: () => void;
  onDelete: () => void;
  index: number;
}

function TaskItem({ task, done, onDoneToggle, onDelete, index }: TaskItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.buttonDone,
          { backgroundColor: done ? "green" : "gray" },
        ]}
        onPress={onDoneToggle}
      />
      <Text style={styles.text}>{task}</Text>
      <TouchableOpacity style={styles.buttonDelete}>
        <Text style={styles.textDelete} onPress={onDelete}>
          Eliminar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonDone: {
    backgroundColor: "green",
    borderRadius: 30,
    height: 30,
    width: 30,
  },

  buttonDelete: {
    backgroundColor: "red",
    borderRadius: 10,
    height: 20,
    paddingLeft: 10,
    width: 90,
  },

  container: {
    alignItems: "center",
    backgroundColor: "#212121",
    borderRadius: 20,
    flexDirection: "row",
    padding: 10,
  },

  text: {
    color: "white",
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
  },

  textDelete: {
    color: "white",
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "bold",
  },
});

export default TaskItem;
