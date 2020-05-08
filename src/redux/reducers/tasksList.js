import { ADD_TASK } from "../actionsType";

const defaultState = [];
export const tasksList = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        default:
            return state
    }
}