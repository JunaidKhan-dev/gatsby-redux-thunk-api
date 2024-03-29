import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import Layout from "../components/layout"
import SimpleSlider from "../components/Slider"
import styles from "../styles/homePage.module.scss"
import LatestBlog from "../components/LatestBlog"
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

const IndexPage = ({ themeType, dispatch }) => {
  const [themeStyle, setThemeStyle] = React.useState({})
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

  return (
    <Layout>
      <SimpleSlider />
      <div className={styles.home}>
        <h1>Latest Blogs</h1>
      </div>
      <LatestBlog />
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
    themeType: state.themeReducer.themeType,
  }
}

export default connect(mapStateToProps)(IndexPage)
