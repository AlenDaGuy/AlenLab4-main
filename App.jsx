import React, { useState } from 'react';
import { View, Text } from 'react-native'
import TodoForm from './ToDoForm';

export default function App() {

  const [tasks, setTasks] = useState([])

  const addTask = (taskText) => {

    setTasks([...tasks, taskText]);
  };
  
  return (
    <View >
      {
        tasks.map((task, idx) => <Text key={idx}>{task}</Text>)
      }
      <TodoForm addTask={addTask}/>
    </View>
  );
}