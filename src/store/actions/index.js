import {ACTIONS} from "./types";
import {getModes} from "../../utils";

export const setModes = data => ({
    type: ACTIONS.SET_MODES,
    payload: data
});

export const setCurrentMode = data => ({
    type: ACTIONS.SET_CURRENT_MODE,
    payload: data
});

export const setVisitedCells = cells => ({
    type: ACTIONS.SET_VISITED_CELLS,
    payload: cells
});

export const setStart = flag => ({
    type: ACTIONS.SET_START,
    payload: flag
});

export const getAllModes = () => dispatch => {
    getModes()
        .then(result => {
            if (result?.status === 200 && result.data) {
                dispatch(setModes(result.data));
            }
        }).catch(e => {
        console.log('get modes error happened', e)
    })
}

