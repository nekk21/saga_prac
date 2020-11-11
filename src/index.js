import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { rootReducer } from './redux/reducers/rootReduser'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { sagaWatcher } from './redux/sagas'

const saga = createSagaMiddleware()

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, saga),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

// saga.run(sagaWatcher)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorker.unregister()
