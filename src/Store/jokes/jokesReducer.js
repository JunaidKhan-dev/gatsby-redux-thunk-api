import { GET_JOKES, GET_JOKES_ERROR, GET_JOKES_SUCCESS } from "./jokesConstant"

const initialState = {
  fetching: true,
  error: false,
  items: [],
}

export const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOKES:
      return { ...state }
    case GET_JOKES_SUCCESS:
      return { ...state, fetching: false, error: false, items: action.payload }
    case GET_JOKES_ERROR:
      return { ...state, fetching: false, error: true }
    default:
      return { ...state }
  }
}
