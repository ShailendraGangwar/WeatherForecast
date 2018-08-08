import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { createLogger } from 'redux-logger';

import rootReducer from './reducers/root'

const persistConfig = {
  key: 'root',
  storage,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = [];

if(__DEV__){ middleware.push(createLogger()); }
const enhancers = [applyMiddleware(...middleware)];

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
  let store = createStore(persistedReducer, undefined, composeEnhancers(...enhancers))
  let persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore;