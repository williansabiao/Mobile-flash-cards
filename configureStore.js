import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { AsyncStorage } from 'react-native'

import rootReducer from './reducers'

const persistConfig = {
  key: 'udaciCards',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default function configureStore(initialState) {
export default function configureStore() {
  const store = createStore(
    persistedReducer,
    {},
    compose(
      applyMiddleware(thunk),
    ),
  )
  const persistor = persistStore(store)
  return { store, persistor }
}
