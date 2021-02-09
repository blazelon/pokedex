import React, { useState, useEffect, useContext } from 'react'
import { DefaultTheme, DarkTheme, Provider as PaperProvider, configureFonts } from 'react-native-paper'

import { lightThemeColors, darkThemeColors } from './Colors'
import { fonts } from './Typography'

const ThemeContext = React.createContext()

export const useTheme = (props) => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ theme = 'light', children }) => {
  const [_theme, setTheme] = useState(theme)
  const [themeColors, setThemeColors] = useState(lightThemeColors)

  const paperTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...themeColors,
      accent: themeColors.secondary
    },
    fonts: configureFonts(fonts)
  }

  useEffect(() => {
    if (theme === 'light') {
      setThemeColors(lightThemeColors)
    } else {
      setThemeColors(darkThemeColors)
    }
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme: _theme,
        colors: themeColors,
        setTheme: t => setTheme(t)
      }}
    >
      <PaperProvider theme={paperTheme}>
        {children}
      </PaperProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContext