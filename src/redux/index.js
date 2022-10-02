import { combineReducers } from "redux";
import { driverReducer } from "./reducers/drivers.reducers";
import { favoriteReducer } from './reducers/favorite.reducer'
import { paginationReducer } from './reducers/pagination.reducer'

export const reducers = combineReducers({
    driverReducer,
    favoriteReducer,
    paginationReducer
})