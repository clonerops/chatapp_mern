import { Constants } from "../constants"; 

export const registerUserAction = (userData: object) => {
    return async(dispatch: any) => {
        await dispatch({
            type: Constants.REGISTER_USER,
            payload: userData
        })
    }
}

export const loginUserAction = (userData: object) => {
    return async(dispatch:any) => {
        await dispatch({
            type: Constants.LOGIN_USER,
            payload: userData
        })
    }
}