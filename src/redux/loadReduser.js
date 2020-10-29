import { SHOW_LOADER } from './types'
import { HIDE_LOADER } from './types'
import { SHOW_ALERT } from './types'
import { HIDE_ALERT } from './types'

const initialState = {
    loader: false,
    alert: false,
}

export const loadReduser = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loader: true }

        case HIDE_LOADER: {
            return { ...state, loader: false }
        }

        case SHOW_ALERT:
            return { ...state, alert: true }

        case HIDE_ALERT: {
            return { ...state, alert: false }
        }

        default:
            return state
    }
}
