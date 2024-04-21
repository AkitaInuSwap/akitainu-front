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
  {
    href: '/liquidity/add',
    name: 'Add Liquidity',
  },
]

const LiquidityAdd: NextPageWithLayout = () => {
  const router = useRouter()

  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Typography component="h5" variant="h5" sx={{ mb: 1 }}>
          Add Liquidity
        </Typography>
        <Typography component="p" variant="subtitle2" sx={{ color: 'grey' }}>
          Add liquidity on XRPL by depositing token pairs to earn trading fees.
          Select your tokens, enter the amount, and click &apos;Add&apos;.
          You&apos;ll receive LP tokens as proof of your contribution.
        </Typography>
      </Grid>
    </Grid>
  )
}

LiquidityAdd.getLayout = function getLayout(page: ReactElement) {
  return <Layout navigations={navigations}>{page}</Layout>
}

export default LiquidityAdd
