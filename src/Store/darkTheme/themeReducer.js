import { ThemeDark, ThemeLight, ThemeSpecial } from "./themeConstant"

const initialState = {
  themeType: null,
}
export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ThemeDark:
    case ThemeLight:
    case ThemeSpecial:
      return { ...state, themeType: action.payload }
    default:
      return { ...state }
  }
}
