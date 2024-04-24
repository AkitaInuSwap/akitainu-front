'use client'

// React
import { useState } from 'react'
import Image from 'next/image'
// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Unstable_Grid2'
import MuiCard from '@mui/material/Card'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
// Components
import Card from '@/components/Card'
import PoolCreateForm from '@/components/PoolCreateForm'
import Layout from '@/components/Layout'
// Types
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'

const icon = 'https://assets.pancakeswap.finance/web/native/11155111.png'

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
    name: 'Create Pool',
  },
]

const LiquidityCreate: NextPageWithLayout = () => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

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
              Create liquidity pool
            </Typography>
            <Typography
              component="p"
              variant="subtitle2"
              sx={{ color: 'grey' }}
            >
              Creating a liquidity pool involves pairing two digital assets to
              form a liquidity pool, contributing to decentralized finance.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid xs={12}>
        <Card>
          <CardContent>
            <PoolCreateForm
              activeStep={activeStep}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

LiquidityCreate.getLayout = function getLayout(page: ReactElement) {
  return <Layout navigations={navigations}>{page}</Layout>
}

export default LiquidityCreate
