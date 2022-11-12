import { Constants } from "../constants";

const initialState = {
    register: {},
    login: {}
}

export const registerUserReducer = (state = initialState.register, {type, payload}) => {
    switch (type) {
        case Constants.REGISTER_USER:
            return {
                ...state,
                register: payload
            }
            break;
    
        default:
            return state
            break;
    }
}

export const loginUserReducer = (state = initialState.login, {type, payload}) => {
    switch (type) {
        case Constants.LOGIN_USER:
            return {
                ...state,
                login: payload
            }
            break;
    
        default:
            return state;
            break;
    }
}