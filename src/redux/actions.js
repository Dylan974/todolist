import { ADD_TASK } from "./actionsType";

export const addTask = (title) => ({
    type: ADD_TASK,
    payload: {
        id: new Date().getTime().toString(),
        title,
        completed: false,
    }
});