import Providers from '@/providers'
import Navbar from '@/components/Navbar'
import type { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Providers>
      <Navbar />
      {children}
    </Providers>
  )
}

export default Layout
