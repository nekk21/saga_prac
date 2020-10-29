import { combineReducers } from 'redux'
import { moviesReducer } from '../redux/moviesReducer'
import { loadReduser } from '../redux/loadReduser'

export const rootReducer = combineReducers({
    items: moviesReducer,
    app: loadReduser,
})
