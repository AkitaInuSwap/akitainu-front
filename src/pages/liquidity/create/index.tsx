'use client'

// React
import { useState } from 'react'
import Image from 'next/image'
// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Unstable_Grid2'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
// Components
import Card from '@/components/Card'
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
            <Stepper activeStep={activeStep} orientation="vertical">
              <Step key={1}>
                <StepLabel>CHOOSE TOKEN PAIR</StepLabel>
                <StepContent>
                  <Box sx={{ mb: 2 }}>
                    <Typography>hoge</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Button
                      variant="contained"
                      disableElevation
                      sx={{ mt: 1, mr: 1 }}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Box>
                </StepContent>
              </Step>

              <Step key={2}>
                <StepLabel>DEPOSIT AMOUNT</StepLabel>
                <StepContent>
                  <Box sx={{ mb: 2 }}>
                    <Typography>hoge</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Button
                      variant="outlined"
                      disableElevation
                      sx={{ mt: 1, mr: 1 }}
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      disableElevation
                      sx={{ mt: 1, mr: 1 }}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Box>
                </StepContent>
              </Step>

              <Step key={3}>
                <StepLabel>INITIAL FEE</StepLabel>
                <StepContent>
                  <Box sx={{ mb: 2 }}>
                    <Typography>hoge</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Button
                      variant="outlined"
                      disableElevation
                      sx={{ mt: 1, mr: 1 }}
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      disableElevation
                      sx={{ mt: 1, mr: 1 }}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Box>
                </StepContent>
              </Step>

              <Step key={3}>
                <StepLabel>CONFIRMATION</StepLabel>
                <StepContent>
                  <Box sx={{ mb: 2 }}>
                    <Typography>hoge</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Button
                      variant="outlined"
                      disableElevation
                      sx={{ mt: 1, mr: 1 }}
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      disableElevation
                      sx={{ mt: 1, mr: 1 }}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Box>
                </StepContent>
              </Step>

              <Step key={4}>
                <StepLabel>CONPLETE</StepLabel>
                <StepContent>
                  <Box sx={{ mb: 2 }}>
                    <Typography>hoge</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Button
                      variant="outlined"
                      disableElevation
                      sx={{ mt: 1, mr: 1 }}
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      disableElevation
                      sx={{ mt: 1, mr: 1 }}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Box>
                </StepContent>
              </Step>
            </Stepper>
          </CardContent>
        </Card>
      </Grid>

      <Grid xs={12}>
        <Typography component="h6" variant="subtitle1">
          CHOOSE TOKEN PAIR
        </Typography>
      </Grid>

      <Grid xs={12}>
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center">
              <Image src={icon} alt="icon" width={50} height={50} />
              <Box>
                <Typography variant="h6" marginLeft={1}>
                  SEP
                </Typography>
                <Typography variant="body2" marginLeft={1}>
                  r9iJpeyZTxpYRKZ39L8Dt3MZXRJ7WJtATo
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid xs={12} sx={{ textAlign: 'center' }}>
        <AddIcon />
      </Grid>

      <Grid xs={12}>
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center">
              <Image src={icon} alt="icon" width={50} height={50} />
              <Box>
                <Typography variant="h6" marginLeft={1}>
                  SEP
                </Typography>
                <Typography variant="body2" marginLeft={1}>
                  r9iJpeyZTxpYRKZ39L8Dt3MZXRJ7WJtATo
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid xs={12}>
        <Typography component="h6" variant="subtitle1">
          DEPOSIT AMOUNT
        </Typography>
      </Grid>

      <Grid xs={12}>
        <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
          <Image src={icon} alt="icon" width={24} height={24} />
          <Typography variant="body1" marginLeft={1}>
            SEP
          </Typography>
        </Box>
        <TextField fullWidth />
      </Grid>

      <Grid xs={12}>
        <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
          <Image src={icon} alt="icon" width={24} height={24} />
          <Typography variant="body1" marginLeft={1}>
            SEP
          </Typography>
        </Box>
        <TextField fullWidth />
      </Grid>
    </Grid>
  )
}

LiquidityCreate.getLayout = function getLayout(page: ReactElement) {
  return <Layout navigations={navigations}>{page}</Layout>
}

export default LiquidityCreate
