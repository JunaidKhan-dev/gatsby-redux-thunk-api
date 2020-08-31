import { GET_JOKES, GET_JOKES_ERROR, GET_JOKES_SUCCESS } from "./jokesConstant"
import axios from "axios"

export const getJokesAction = () => {
  return async dispatch => {
    dispatch({ type: GET_JOKES })
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      )
      dispatch({ type: GET_JOKES_SUCCESS, payload: result.data })
    } catch (error) {
      dispatch({ type: GET_JOKES_ERROR })
    }
  }
}
