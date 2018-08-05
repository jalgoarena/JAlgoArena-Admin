// @flow
type Action = {
    type:string,
    isConnected?: boolean,
    error?: string,
    config?: {title: string, emailRegex: string, emailErrorMessage: string, teams: Array<string>, regions: Array<string>}
}

import * as redux from 'redux';
import * as types from "../../constants/ActionTypes";

import {problems} from "../../problems/reducers";

const rootReducer = redux.combineReducers({
    problems,
    showModal,
    errorMessage,
    config
});


export function config(state: {} = {
    title: "Welcome to Admin Panel"
}, action: Action) {
    switch (action.type) {
        case types.UPDATE_CONFIG:
            return action.config;
        default:
            return state;
    }
}

export function showModal(state: boolean = false, action: Action) {

    if (action.error) {
        return false;
    }

    switch (action.type) {
        case types.FETCH_PROBLEMS_REQUEST:
            return true;
        case types.FETCH_RAW_PROBLEMS:
        case types.CLOSE_WORK_IN_PROGRESS_WINDOW:
        case types.SET_ERROR_MESSAGE:
            return false;
        default:
            return state;
    }
}

export function errorMessage(state: ?string = null, action: {type:string, error: ?string}) {
    const { type, error } = action;

    if (type === types.RESET_ERROR_MESSAGE) {
        return null;
    } else if (error) {
        return error;
    }

    return state;
}

export default rootReducer;