'use client'

// React
import { useRouter } from 'next/router'
// MUI
import Button from '@mui/material/Button'
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
    href: '/liquidity',
    name: 'Liquidity',
  },
]

const Liquidity: NextPageWithLayout = () => {
  const router = useRouter()

  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Typography component="h5" variant="h5" sx={{ mb: 1 }}>
          Liquidity
        </Typography>
        <Typography component="p" variant="subtitle2" sx={{ color: 'grey' }}>
          Add or remove liquidity for XRPL pools here. Select a token pair,
          input amounts, and confirm to earn fees.
        </Typography>
      </Grid>
      <Grid xs={12}>
        <Button
          variant="contained"
          disableElevation
          onClick={() => router.push('/liquidity/add')}
        >
          Add liquidity
        </Button>
      </Grid>
    </Grid>
  )
}

Liquidity.getLayout = function getLayout(page: ReactElement) {
  return <Layout navigations={navigations}>{page}</Layout>
}

export default Liquidity
