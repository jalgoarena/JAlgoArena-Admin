// @flow

type Action = {type:string}
    | {type:string, submissionId:string}
    | {type:string, sourceCode:string}
    | {type:string, problemId:string}
    | {type:string, problems:Array<Problem>}
    | {type:string, rawProblems:Array<RawProblem>}
    | {type:string, level:number}
    | {type:string, hideDoneProblems:boolean}

import * as types from "../../constants/ActionTypes"
import {setErrorMessage} from "../../common/actions/index";
import RawProblem from "../domain/RawProblem";

export function startFetchingProblems(): Action {
    return {
        type: types.FETCH_PROBLEMS_REQUEST
    };
}

export function fetchRawProblems() {
    const options = {
        headers: {
            'Accept': 'application/json'
        },
        method: 'get'
    };

    return (dispatch: Dispatch) => {
        return fetch(`/api/judge/api/rawProblems`, options)
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    dispatch(setErrorMessage("Cannot connect to Judge Service: \n" + JSON.stringify(json.error)));
                } else {
                    dispatch(setRawProblems((json: Array<RawProblem>)));
                }
            })
            .catch((error) => console.log(`[err] GET /api/judge/api/rawProblems:` + error));
    };
}

function setRawProblems(rawProblems: Array<RawProblem>): Action {
    return {
        type: types.FETCH_RAW_PROBLEMS,
        rawProblems
    }
}