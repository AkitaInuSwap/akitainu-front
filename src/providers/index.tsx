import { AccountContextProvider } from '@/providers/AccountContextProvider'
import ThemeProvider from '@/providers/ThemeProvider'
import type { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <AccountContextProvider>
        {children}
      </AccountContextProvider>
    </ThemeProvider>
  )
}

export default Providers
