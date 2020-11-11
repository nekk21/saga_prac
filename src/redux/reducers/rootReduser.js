import { combineReducers } from 'redux'
import { moviesReducer } from '../reducers/moviesReducer'
import { loadReduser } from '../reducers/loadReduser'

export const rootReducer = combineReducers({
    items: moviesReducer,
    app: loadReduser,
})
