// Providers
import Providers from '@/providers'
// MUI
import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'
// Components
import BreadcrumbNavigation from '@/components/Common/BreadcrumbNavigation'
import Navbar from '@/components/Navbar'
// Types
import type { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  navigations?: {
    href: string
    name: string
  }[]
}

const Layout: React.FC<LayoutProps> = ({ children, navigations }) => {
  return (
    <Providers>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 12 }}>
        {navigations && (
          <Grid container spacing={2}>
            <Grid xs={12} sx={{ mb: 2 }}>
              <BreadcrumbNavigation navigations={navigations} />
            </Grid>
          </Grid>
        )}
        {children}
      </Container>
    </Providers>
  )
}

export default Layout
