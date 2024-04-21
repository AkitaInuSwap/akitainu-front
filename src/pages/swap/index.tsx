'use client'

// React
import { useRouter } from 'next/router'
// MUI
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
// Components
import Layout from '@/components/Layout'
// Types
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'

const navigations = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/swap',
    name: 'Swap',
  },
]

const Swap: NextPageWithLayout = () => {
  const router = useRouter()

  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Typography component="h5" variant="h5" sx={{ mb: 1 }}>
          Swap
        </Typography>
        <Typography component="p" variant="subtitle2" sx={{ color: 'grey' }}>
          Here, you can exchange one type of token for another quickly and
          securely on the XRPL.
        </Typography>
      </Grid>
    </Grid>
  )
}

Swap.getLayout = function getLayout(page: ReactElement) {
  return <Layout navigations={navigations}>{page}</Layout>
}

export default Swap
