import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import TaskItem, { TaskItemProps} from "../components/TaskItem";
import ListHeader, {ListHeaderProps} from "../components/ListHeader";
import useTask from "../hooks/useTask";
import { useState } from 'react';

const screenHeight = Dimensions.get("screen").height;

const HomeScreen = () => {
  const { addNew, addTask, deleteTask, editTask, task, tasks, updateAdd, updateTaskStatus, toggleTaskDone } = useTask();
  const [filterDone, setFilterDone] = useState(false);
return (
  <SafeAreaView style={{ marginHorizontal: 20 }}>
    {/* Contenedor del input condicionado con useState*/}

    {addNew && (
      <View>
        <TextInput
          onChangeText={(text) => editTask(text)}
          placeholder="Agregar nueva tarea a realizar..."
          style={styles.input}
          value={task}
        />
        <View style={{ marginVertical: 10, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={addTask}
            style={[styles.button, styles.acceptButton]}
          >
            <Text style={styles.buttonText}>Agregar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => updateAdd(false)}
            style={[styles.button, styles.cancelButton]}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separatorLine} />
      </View>
    )}

    {/* Botón para agregar tarea */}
    <View style={styles.addButtonLocator}>
      <TouchableOpacity
        onPress={() => updateAdd(true)}
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
      
    <View>
    <FlatList
  data={tasks.filter((item) => (filterDone ? item.done : !item.done))}
  keyExtractor={(item) => item.id} // Utiliza el id como clave
  renderItem={({ item, index }) => (
    <TaskItem
      task={item.text}
      done={item.done}
      onDoneToggle={() => toggleTaskDone(item.id)} // Pasa el id
      onDelete={() => deleteTask(item.id)} // Pasa el id para eliminar
      index={index}
    />
  )}

  ListHeaderComponent={() => (
    <ListHeader
      filterDone={filterDone} // Pasa el estado de filtrado
      toggleFilter={() => setFilterDone(!filterDone)} // Llama a la función para cambiar el estado de filtrado
    />
  )}
  ItemSeparatorComponent={() => <View style={{ marginVertical: 4 }} />}
/>

    </View>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
  acceptButton: {
    backgroundColor: "green",
  },

  addButton: {
    backgroundColor: "#343434",
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    // position: 'absolute'
  },

  addButtonText: {
    color: "white",
    fontSize: 25,
  },

  addButtonLocator: {
    position: "absolute",
    right: 10,
    top: screenHeight - 120,
  },

  button: {
    alignSelf: "flex-start",
    padding: 10,
    paddingBottom: 13,
    borderRadius: 13,
  },

  buttonText: {
    fontSize: 18,
    color: "white",
  },

  cancelButton: {
    backgroundColor: "red",
    marginLeft: 5,
  },

  input: {
    backgroundColor: "#dedede",
    marginTop: 40,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderRadius: 10,
  },

  separatorLine: {
    backgroundColor: "#212121",
    height: 2,
    marginTop: 10,
  },

  textTaskDone: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
});

export default HomeScreen;
