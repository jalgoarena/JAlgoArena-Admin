// @flow

import * as types from "../../constants/ActionTypes";
import RawProblem from "../domain/RawProblem";

type ProblemsState = {
    rawItems: Array<RawProblem>
}

type ProblemsAction = {
    type: string,
    rawProblems?: Array<RawProblem>
}

export function problems(state: ProblemsState = {
    rawItems: []
}, action: ProblemsAction): ProblemsState {
    switch (action.type) {
        case types.FETCH_RAW_PROBLEMS:
            return Object.assign({}, state, {
                rawItems: action.rawProblems
            });
        default:
            return state;
    }
}
