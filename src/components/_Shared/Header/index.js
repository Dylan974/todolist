import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const days = [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
];

const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
];

export default function Header() {
    const date = new Date();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{days[date.getDay()] + ' ' + date.getDate() + ' ' + months[date.getMonth()]}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20
    },
    title: {
        fontSize: 25,
        fontWeight: "bold"
    }
});