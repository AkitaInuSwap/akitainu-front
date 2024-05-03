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
        <Box
          sx={{ p: 2, backgroundColor: '#404040' }}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box sx={{ pb: 2, textAlign: 'right' }}>
            <Button
              variant="outlined"
              size="small"
              color="inherit"
              startIcon={<TuneIcon />}
              sx={{ mr: 1 }}
            >
              0.1 %
            </Button>
            <IconButton color="inherit" size="small">
              <AutorenewIcon fontSize="small" />
            </IconButton>
          </Box>

          <Box>
            {/* BaseToken */}
            <Box sx={{ mb: 1 }} display="flex" justifyContent="space-between">
              <Typography variant="body2">$1.07</Typography>
              <Typography variant="body2">Balance: 6.871988157</Typography>
            </Box>
            <Controller
              name="baseAmount"
              control={control}
              defaultValue=""
              rules={{
                required: { value: true, message: 'Amount is required' },
              }}
              render={({ field, formState: { errors } }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  placeholder="0.0"
                  fullWidth
                  error={errors.baseAmount ? true : false}
                  helperText={errors.baseAmount?.message as string}
                  sx={{ mb: 2, input: { color: 'white' } }}
                />
              )}
            />
            <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
              <Button
                variant="outlined"
                color="info"
                disableElevation
                endIcon={<ArrowDropDownIcon />}
              >
                Select Token
              </Button>
              <Box>
                <Button
                  variant="contained"
                  color="info"
                  size="small"
                  disableElevation
                  sx={{ mr: 1 }}
                >
                  Half
                </Button>
                <Button
                  variant="contained"
                  color="info"
                  size="small"
                  disableElevation
                >
                  Max
                </Button>
              </Box>
            </Box>

            <Divider sx={{ my: 3 }} color="white">
              <IconButton>
                <SwapVertIcon sx={{ color: 'white' }} />
              </IconButton>
            </Divider>

            {/* QuoteToken */}
            <Box sx={{ mb: 1 }} display="flex" justifyContent="space-between">
              <Typography variant="body2">$1.07</Typography>
              <Typography variant="body2">Balance: 6.871988157</Typography>
            </Box>
            <Controller
              name="quoteAmount"
              control={control}
              defaultValue=""
              rules={{
                required: { value: true, message: 'Amount is required' },
              }}
              render={({ field, formState: { errors } }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  placeholder="0.0"
                  fullWidth
                  error={errors.quoteAmount ? true : false}
                  helperText={errors.quoteAmount?.message as string}
                  sx={{ mb: 2, input: { color: 'white' } }}
                />
              )}
            />
            <Box display="flex" justifyContent="space-between" sx={{ mb: 3 }}>
              <Button
                variant="outlined"
                color="info"
                disableElevation
                endIcon={<ArrowDropDownIcon />}
              >
                Select Token
              </Button>
              <Box>
                <Button
                  variant="contained"
                  color="info"
                  size="small"
                  disableElevation
                  sx={{ mr: 1 }}
                >
                  Half
                </Button>
                <Button
                  variant="contained"
                  color="info"
                  size="small"
                  disableElevation
                >
                  Max
                </Button>
              </Box>
            </Box>
          </Box>

          <Box>
            <LoadingButton
              variant="contained"
              type="submit"
              fullWidth
              loading={loading}
            >
              Swap
            </LoadingButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

Swap.getLayout = function getLayout(page: ReactElement) {
  return <Layout navigations={navigations}>{page}</Layout>
}

export default Swap
