'use client'

// React
import { useState } from 'react'
// Lib
import { useForm, Controller } from 'react-hook-form'
// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Unstable_Grid2'
import IconButton from '@mui/material/IconButton'
import LoadingButton from '@mui/lab/LoadingButton'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import SwapVertIcon from '@mui/icons-material/SwapVert'
import TuneIcon from '@mui/icons-material/Tune'
// Components
import Card from '@/components/Card'
import SwapForm from '@/components/Feature/SwapForm'
import Layout from '@/components/Layout'
// Types
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import type { SwapFormSchema } from '@/schema/swap-form-schema'

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
  const [loading, setLoading] = useState<boolean>(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SwapFormSchema>()

  const onSubmit = (data: SwapFormSchema) => {
    setLoading(true)
    try {
      console.log('onSubmit: ', data)
    } catch (error) {
      console.error('onSubmit: ', error)
    } finally {
      setLoading(false)
    }
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
              Swap
            </Typography>
            <Typography
              component="p"
              variant="subtitle2"
              sx={{ color: '#c0c0c0' }}
            >
              Here, you can exchange one type of token for another quickly and
              securely on the XRPL.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={12}>
        <SwapForm />
      </Grid>
    </Grid>
  )
}

Swap.getLayout = function getLayout(page: ReactElement) {
  return <Layout navigations={navigations}>{page}</Layout>
}

export default Swap
