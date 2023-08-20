import { Alert } from "react-native";
import { useState } from "react";


const useTask = () => {
  const [addNew, setAddNew] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<{ id: string; text: string; done: boolean }[]>([]);
  const [taskIdCounter, setTaskIdCounter] = useState(1); // Para generar identificadores únicos
  const [taskDone, setTaskDone] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);


  const addTask = () => {
    if (task.trim() === "") {
      Alert.alert("No es posible agregar una tarea vacía");
      return;
    }

    const taskId = `${Date.now()}-${task}`; // Utiliza la fecha y el contenido como id
    const newTask = { id: taskId, text:task, done: false };
    setTasks((currentTasks) => [...currentTasks, newTask]);
    setTask("");
    setAddNew(false);
  };

  const deleteTask = (taskId: string) => {
    // Crea una copia de las tareas actuales
    const updatedTasks = [...tasks];
    // Encuentra el índice de la tarea con el taskId
    const taskIndex = updatedTasks.findIndex((task) => task.id === taskId);
    // Si se encuentra la tarea, elimínala
    if (taskIndex !== -1) {
      updatedTasks.splice(taskIndex, 1);
      // Establece el nuevo estado con las tareas actualizadas
      setTasks(updatedTasks);
    }
  };
  

  const updateTaskStatus = () => {
    setTaskDone(!taskDone);
  };

  const updateAdd = (state: boolean) => {
    setAddNew(state);
  };

  const editTask = (state: string) => {
    setTask(state);
  };

  const toggleTaskDone = (taskId: string) => {
    console.log(`Toggled task at index ${taskId}`);
    setTasks((currentTasks) => {
      const updatedTasks = [...currentTasks];
      const taskIndex = updatedTasks.findIndex((task) => task.id===taskId);
      if (taskIndex !==-1) {
        
      updatedTasks[taskIndex].done = !updatedTasks[taskIndex].done;

      }
              
      return updatedTasks;
    });
  };

  return {
    addNew,
    addTask,
    deleteTask,
    editTask,
    task,
    tasks,
    taskDone,
    updateAdd,
    updateTaskStatus,
    toggleTaskDone,
  };
};

export default useTask;
