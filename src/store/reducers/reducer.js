import {ACTIONS} from "../actions/types";

const initialState = {
    modes: {},
    currentMode: {},
    visitedCells: [],
}

export const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case ACTIONS.SET_MODES:
            return {...state, modes: payload}

        case ACTIONS.SET_CURRENT_MODE:
            return {...state, currentMode: payload}

        case ACTIONS.SET_VISITED_CELLS:
            return {...state, visitedCells: payload}

        default:
            return state;
    }
}