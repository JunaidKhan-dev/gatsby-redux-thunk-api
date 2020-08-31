import { combineReducers } from "redux"
import { themeReducer } from "./darkTheme/themeReducer"
import { jokesReducer } from "./jokes/jokesReducer"
const rootReducer = combineReducers({
  themeReducer: themeReducer,
  jokesReducer: jokesReducer,
})

export default rootReducer
