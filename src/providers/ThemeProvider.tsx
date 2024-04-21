import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'
import { Source_Code_Pro } from 'next/font/google'
import type { ReactNode } from 'react'

interface ThemeProviderProps {
  children: ReactNode
}

const roboto = Source_Code_Pro({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'block',
})

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = createTheme({
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  })

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider
