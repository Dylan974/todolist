import { ADD_TASK, TOGGLE_TASK } from "./actionsType";

export const addTask = (title) => ({
    type: ADD_TASK,
    payload: {
        id: new Date().getTime().toString(),
        title,
        completed: false,
    }
});

export const toggletask = (id) => ({
    type: TOGGLE_TASK,
    payload: {
        id
    }
});