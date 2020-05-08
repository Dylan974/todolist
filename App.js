import React from "react";
import { StyleSheet, SafeAreaView, Platform, View } from "react-native";
import { Provider } from 'react-redux';

import Header from "./src/components/_Shared/Header";
import TasksContainer from "./src/components/TasksEpic/TasksContainer";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header />
        <TasksContainer />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    paddingLeft: 20,
    paddingRight: 20
  }
});
