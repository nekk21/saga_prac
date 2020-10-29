import {
    HIDE_LOADER,
    SHOW_LOADER,
    UPLOAD_MOVIES,
    SHOW_ALERT,
    HIDE_ALERT,
} from './types'

export function uploadMovies(movies) {
    return {
        type: UPLOAD_MOVIES,
        payload: movies,
    }
}

export function sendRequest(url = ``) {
    return async dispatch => {
        dispatch(showLoader())

        const response = await fetch(url)
        const data = await response.json()
        dispatch({ type: UPLOAD_MOVIES, payload: data })

        if (data < 1) {
            dispatch(showAlert())
        }

        dispatch(hideLoader())
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
        })
        setTimeout(() => {
            dispatch(hideAlert())
        }, 2000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT,
    }
}
