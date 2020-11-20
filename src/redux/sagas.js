import { call, put, takeEvery } from 'redux-saga/effects'
import {
    hideLoader,
    showLoader,
    showAlert,
    sendRequestMovies,
} from './actions/actions'
import { REQUEST_MOVIES, UPLOAD_MOVIES } from './types'

export function* sagaWatcher() {
    yield takeEvery(REQUEST_MOVIES, sagaWorker)
}

function* sagaWorker(obj) {
    yield put(showLoader())
    const payload = yield call(sendRequestMovies, obj.payload)
    yield put({ type: UPLOAD_MOVIES, payload: payload })
    yield put(hideLoader())
    if (payload < 1) {
        yield put(showAlert())
    }
}
