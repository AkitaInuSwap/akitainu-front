import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'
import { Figtree } from 'next/font/google'
import type { ReactNode } from 'react'

interface ThemeProviderProps {
  children: ReactNode
}

const font = Figtree({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'block',
})

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = createTheme({
    typography: {
      fontFamily: font.style.fontFamily,
    },
  })

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider
