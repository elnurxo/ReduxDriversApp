import { combineReducers } from "redux";
import { driverReducer } from "./reducers/drivers.reducers";
import { favoriteReducer } from './reducers/favorite.reducer'

export const reducers = combineReducers({
    driverReducer,
    favoriteReducer
})