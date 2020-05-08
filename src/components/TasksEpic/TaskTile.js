import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleTask } from '../../redux/actions';

const TaskTile = ({ id, title, completed }) => {
    const dispatch = useDispatch();
    return (
        <TouchableHighlight onPress={() => dispatch(toggleTask(id))}>
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <Image
                        style={styles.icon}
                        source={completed ? require('../../../assets/icon_check.png') : require('../../../assets/icon_circle.png')}
                    />
                    <Text style={[styles.title, { color: completed ? 'lightgrey' : 'black' }]}>{title}</Text>
                </View>
                <TouchableHighlight>
                    <Image
                        style={styles.icon}
                        source={require('../../../assets/icon_bin.png')}
                    />
                </TouchableHighlight>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    subcontainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 30,
        height: 30
    },
    title: {
        marginLeft: 30
    }
});

export default TaskTile;