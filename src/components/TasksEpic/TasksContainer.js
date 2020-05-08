import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TasksList from './TasksList';
import TaskForm from './TaskForm';
import CountersContainer from './CountersContainer';
import FloatingButton from '../_Shared/FloatingButton';

function TasksContainer(props) {
    const [tasks, setTasks] = useState([{ id: new Date().getTime().toString(), title: 'Nouvelle tâche', completed: false }]);

    const [isFormOpened, setIsFormOpened] = useState(false);

    const onAddTask = (title) => {
        setTasks([{ id: new Date().getTime().toString(), title, completed: false }, ...tasks]);
    };

    const onDeleteTask = (id) => {
        const newTasks = tasks.filter(task => task.id != id);
        setTasks([...newTasks]);
    };

    const onChangeStatus = (id) => {
        let newTasks = [];
        tasks.forEach(task => {
            if (task.id === id) {
                newTasks.push({ id, title: task.title, completed: !task.completed });
            } else {
                newTasks.push(task);
            }
        })
        setTasks(newTasks);
    };

    const getTasksCompleted = () => {
        let counter = 0;

        tasks.forEach(task => {
            if (task.completed) counter++;
        });
        return counter;
    };

    const toggleForm = () => {
        setIsFormOpened(!isFormOpened);
    }

    return (
        <View style={syles.container}>
            {isFormOpened && <TaskForm onAddTask={onAddTask} />}
            <CountersContainer nbTasks={tasks.length} nbTasksCompleted={() => getTasksCompleted()} />
            <TasksList tasks={tasks} onChangeStatus={onChangeStatus} onDeleteTask={onDeleteTask} />
            <FloatingButton toggleForm={toggleForm} isFormOpened={isFormOpened} />
        </View>
    );
};

const syles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    }
});

export default TasksContainer;