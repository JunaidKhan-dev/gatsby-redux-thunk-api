import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import rootReducer from "./rootReducer"
import thunk from "redux-thunk"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(logger, thunk))

export let persister = persistStore(store)

export default store
