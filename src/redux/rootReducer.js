import {combineReducers} from 'redux'
import { shareReducer } from './reducer'
export const reducers=combineReducers({
shareReducer:shareReducer
})