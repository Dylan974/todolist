import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const TaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const _onChangetext = value => {
        setTitle(value);
    };

    const _onPressButton = () => {
        if (title.length > 0) {
            onAddTask(title);
            setTitle('');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput value={title} onChangeText={_onChangetext} />
            </View>
            <Button onPress={_onPressButton} title='Ajouter' color='green' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    containerInput: {
        width: '75%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        paddingLeft: 7,
    }
});

export default TaskForm;