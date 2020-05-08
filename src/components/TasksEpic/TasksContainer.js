import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TasksList from './TasksList';
import TaskForm from './TaskForm';
import CountersContainer from './CountersContainer';
import FloatingButton from '../_Shared/FloatingButton';
import { useSelector } from 'react-redux';
import { getTasks } from '../../redux/reducers/selectors';

function TasksContainer(props) {
    const tasks = useSelector(getTasks);

    const [isFormOpened, setIsFormOpened] = useState(false);

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
            {isFormOpened && <TaskForm />}
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