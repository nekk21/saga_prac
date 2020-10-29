import { UPLOAD_MOVIES } from './types'

const initialState = {
    movies: [],
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_MOVIES:
            return { ...state, movies: action.payload }

        default:
            return state
    }
}
