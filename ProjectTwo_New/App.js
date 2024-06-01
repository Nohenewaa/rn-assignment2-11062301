import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Button, FlatList, Image } from 'react-native';

const categories = [
    { id: '1', name: 'Exercise',subtitle: '11 tasks', Image: require('./assets/working.png'), tasks: 1 },
    { id: '2', name: 'Study', Image: require('./assets/woman.png'), tasks: 2 },
    { id: '3', name: 'Code', Image: require('./assets/working.png'), tasks: 3 },
    { id: '4', name: 'Cook', Image: require('./assets/woman.png'), tasks: 4 },
    { id: '5', name: 'Read', Image: require('./assets/working.png'), tasks: 5 },
    { id: '6', name: 'Shop', Image: require('./assets/woman.png'), tasks: 6 },
    { id: '7', name: 'Relax', Image: require('./assets/working.png'), tasks: 7 },
    { id: '8', name: 'Clean', Image: require('./assets/woman.png'), tasks: 8 }
];

const initialTasks = [
    { id: '1', title: 'Morning run', category: 'Exercise' },
    { id: '2', title: 'Math homework', category: 'Study' },
    { id: '3', title: 'Finish React Native project', category: 'Code' },
    { id: '4', title: 'Cook dinner', category: 'Cook' },
    { id: '5', title: 'Read a book', category: 'Read' },
    { id: '6', title: 'Buy groceries', category: 'Shop' },
    { id: '7', title: 'Clean the house', category: 'Clean' },
    { id: '8', title: 'Meditation', category: 'Relax' },
    { id: '9', title: 'Gym workout', category: 'Exercise' },
    { id: '10', title: 'Science project', category: 'Study' },
    { id: '11', title: 'Fix bugs in code', category: 'Code' },
    { id: '12', title: 'Bake cookies', category: 'Cook' },
    { id: '13', title: 'Study for exams', category: 'Study' },
    { id: '14', title: 'Yoga session', category: 'Exercise' },
    { id: '15', title: 'Clean the garage', category: 'Clean' }
];

const App = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
    const [searchQuery, setSearchQuery] = useState('');

    const addTask = () => {
        if (newTask.length > 0) {
            const newTaskObj = {
                id: (tasks.length + 1).toString(),
                title: newTask,
                category: selectedCategory
            };
            setTasks([...tasks, newTaskObj]);
            setNewTask('');
        }
    };

    const renderCategory = ({ item }) => (
        <View style={styles.category}>
            <Image source={item.Image} style={styles.categoryIcon} />
            <Text>{item.name}</Text>
        </View>

       
    );

    const renderTask = ({ item }) => (
        <View style={styles.task}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text style={styles.taskCategory}>{item.category}</Text>
        </View>
    );

    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <ScrollView style={styles.flex}>

             <View style={styles.header}>
                <Text style={styles.title}>Hello, Devs</Text>
                <Text style={styles.sub}>14 tasks today</Text>
                <Image source={require('./assets/Profile.png')} style={styles.profilePicture} />


                </View>
                
        
            <TextInput
                style={styles.searchBar}
                placeholder="Search Categories"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            <Text style={styles.subtitle}>Categories</Text>
            <FlatList
                horizontal
                data={filteredCategories}
                renderItem={renderCategory}
                keyExtractor={item => item.id}
                style={styles.categoryList}
            />
            <Text style={styles.subtitle}>Ongoing Tasks</Text>
            <FlatList
                data={tasks}
                renderItem={renderTask}
                keyExtractor={item => item.id}
                style={styles.taskList}
            />
            <TextInput
                style={styles.input}
                placeholder="New Task"
                value={newTask}
                onChangeText={setNewTask}
            />
            <Button title="Add Task" onPress={addTask} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        padding: 30,
        backgroundColor: 'whitesmoke',
    },

    header: {
        padding:20,
        flexDirection: 'row',
        alignItems: 'right',
        marginBottom: 1,
    },
    
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft:10,
        marginBottom:20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 40
    },
    sub: {
        fontSize: 20,
        color: 'grey',
        marginRight:22,
        marginBottom:10,

    },


    
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 40,
        color: 'black',
    },
    searchBar: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    categoryList: {
        marginBottom: 20,
        backgroundColor:'white',
        borderColor:'whitesmoke',
    },
    category: {
        alignItems: 'center',
        marginRight: 15,
    },
    categoryIcon: {
        width: 100,
        height: 100,
        marginBottom: 5,
        marginRight: 40
    },
    taskList: {
        marginBottom: 20,
    },
    task: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: 'white',
        marginBottom: 10,
    },
    taskTitle: {
        fontSize: 18,
    },
    taskCategory: {
        fontSize: 14,
        color: '#888',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});

export default App;
