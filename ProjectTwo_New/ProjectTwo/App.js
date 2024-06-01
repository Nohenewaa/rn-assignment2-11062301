import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, FlatList, Image } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([
    { id: '1', category: 'Exercise', description: 'Morning Yoga' },
    { id: '2', category: 'Study', description: 'Read History Book' },
    { id: '3', category: 'Code', description: 'Finish React Native Project' },
    { id: '4', category: 'Cook', description: 'Prepare Breakfast' },
    { id: '5', category: 'Exercise', description: 'Evening Run' },
    { id: '6', category: 'Study', description: 'Complete Math Assignment' },
    { id: '7', category: 'Code', description: 'Fix Bugs in App' },
    { id: '8', category: 'Cook', description: 'Bake a Cake' },
    { id: '9', category: 'Exercise', description: 'Gym Workout' },
    { id: '10', category: 'Study', description: 'Attend Online Lecture' },
    { id: '11', category: 'Code', description: 'Refactor Codebase' },
    { id: '12', category: 'Cook', description: 'Make Dinner' },
    { id: '13', category: 'Exercise', description: 'Swim Laps' },
    { id: '14', category: 'Study', description: 'Study for Exams' },
    { id: '15', category: 'Code', description: 'Work on Side Project' },
  ]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: String(tasks.length + 1), category: 'General', description: task }]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>
      <ScrollView>
        <Text style={styles.subtitle}>Categories</Text>
        <View style={styles.categories}>
          <Image style={styles.icon} source={require('./assets/exercise.png')} />
          <Text>Exercise</Text>
          <Image style={styles.icon} source={require('./assets/study.png')} />
          <Text>Study</Text>
          <Image style={styles.icon} source={require('./assets/code.png')} />
          <Text>Code</Text>
          <Image style={styles.icon} source={require('./assets/cook.png')} />
          <Text>Cook</Text>
          {/* Add more categories as needed */}
        </View>
        
        <Text style={styles.subtitle}>Ongoing Tasks</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text style={styles.taskCategory}>{item.category}</Text>
              <Text style={styles.taskDescription}>{item.description}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Add Task" onPress={addTask} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskCategory: {
    fontWeight: 'bold',
  },
  taskDescription: {
    fontStyle: 'italic',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 20,
    borderRadius: 5,
  },
});
