'use client'

// MUI
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
// Components
import Card from '@/components/Card'
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
  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Card>
          <CardContent>
            <Typography
              component="h5"
              variant="h5"
              sx={{ mb: 1, fontWeight: 'bold' }}
            >
              Swap
            </Typography>
            <Typography
              component="p"
              variant="subtitle2"
              sx={{ color: 'grey' }}
            >
              Here, you can exchange one type of token for another quickly and
              securely on the XRPL.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

Swap.getLayout = function getLayout(page: ReactElement) {
  return <Layout navigations={navigations}>{page}</Layout>
}

export default Swap
