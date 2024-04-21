import { AccountContextProvider } from '@/providers/AccountContextProvider'
import type { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <AccountContextProvider>{children}</AccountContextProvider>
}

export default Providers
