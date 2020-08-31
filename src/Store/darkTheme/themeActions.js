import { ThemeDark, ThemeLight, ThemeSpecial } from "./themeConstant"

export const ThemeDarkAction = payload => {
  return {
    type: ThemeDark,
    payload: payload,
  }
}

export const ThemeLightAction = payload => {
  return {
    type: ThemeLight,
    payload: payload,
  }
}

export const ThemeSpecialAction = payload => {
  return {
    type: ThemeSpecial,
    payload: payload,
  }
}
