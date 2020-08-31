import React from "react"
import Layout from "../components/layout"
import { connect } from "react-redux"
import { getJokesAction } from "../Store/jokes/jokesActions"
import {
  ThemeDarkAction,
  ThemeLightAction,
  ThemeSpecialAction,
} from "../Store/darkTheme/themeActions"
import {
  ThemeLight,
  ThemeDark,
  ThemeSpecial,
} from "../Store/darkTheme/themeConstant"

const JokesPage = ({ jokes, dispatch, themeType }) => {
  const [themeStyle, setThemeStyle] = React.useState({})

  React.useEffect(() => {
    dispatch(getJokesAction())
  }, [])

  React.useEffect(() => {
    if (themeType === ThemeDark) {
      setThemeStyle({ background: "black", color: "white" })
    }

    if (themeType === ThemeLight) {
      setThemeStyle({ background: "grey", color: "black" })
    }

    if (themeType === ThemeSpecial) {
      setThemeStyle({ background: "purple", color: "white" })
    }
  }, [themeType])
  if (jokes) {
    var { fetching, error, items } = jokes
  }

  return (
    <Layout>
      <h1>Jokes Page</h1>
      {fetching && "loading ..."}
      {error && "Jokes Not Available"}
      {items.map((it, i) => (
        <div>
          <h1 key={it.i}>{it.name}</h1>
        </div>
      ))}

      <div className="theme-changer" style={themeStyle && themeStyle}>
        <h1>ThemeChanger</h1>
        <button
          className="dark"
          onClick={() => dispatch(ThemeDarkAction(ThemeDark))}
        >
          DarkTheme
        </button>
        <button
          className="light"
          onClick={() => dispatch(ThemeLightAction(ThemeLight))}
        >
          LightTheme
        </button>
        <button
          className="special"
          onClick={() => dispatch(ThemeSpecialAction(ThemeSpecial))}
        >
          SpecialTheme
        </button>
        <h3>Current Theme : {themeType || "Not Applied Yet"}</h3>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    jokes: state.jokesReducer,
    themeType: state.themeReducer.themeType,
  }
}
export default connect(mapStateToProps)(JokesPage)
