// import { call, put, takeEvery } from 'redux-saga/effects'
// import { hideLoader, showLoader } from './actions/actions'
// import { REQUEST_MOVIES, UPLOAD_MOVIES } from './types'

// export function* sagaWatcher() {
//     yield takeEvery(REQUEST_MOVIES, sagaWorker)
// }

// function* sagaWorker() {
//     yield put(showLoader())
//     const payload = yield call(sendRequest)
//     yield put({ type: UPLOAD_MOVIES, payload })
//     yield put(hideLoader())
// }

// export async function sendRequest(url = '') {
//     const response = await fetch(url)
//     return await response.json()
// }
