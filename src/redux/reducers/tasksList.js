import { ADD_TASK, TOGGLE_TASK } from "../actionsType";

const defaultState = [];
export const tasksList = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        case TOGGLE_TASK:
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return { id: task.id, title: task.title, completed: !task.completed };
                } else {
                    return task;
                }
            })
        default:
            return state
    }
}