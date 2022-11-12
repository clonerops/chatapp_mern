import { combineReducers } from "redux"
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loginUserReducer, registerUserReducer } from "./auth";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['']
};


const rootReducer = combineReducers({
    register: registerUserReducer, login: loginUserReducer
})

export type RootReducer = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
