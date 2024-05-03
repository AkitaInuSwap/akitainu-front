'use client'

// React
import { useState } from 'react'
// Lib
import { useForm, Controller } from 'react-hook-form'
// MUI
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import LoadingButton from '@mui/lab/LoadingButton'
import TextField from '@mui/material/TextField'
import SwapVertIcon from '@mui/icons-material/SwapVert'
// Components
import AdjustmentButton from '@/components/Feature/SwapForm/AdjustmentButton'
import BaseTokenAmountInput from '@/components/Feature/SwapForm/BaseTokenAmountInput'
import QuoteTokenAmountInput from '@/components/Feature/SwapForm/QuoteTokenAmountInput'
import RefreshButton from '@/components/Feature/SwapForm/RefreshButton'
import TokenSelectionControls from '@/components/Feature/SwapForm/TokenSelectionControls'
import TokenRateAndBalance from '@/components/Feature/SwapForm/TokenRateAndBalance'
// Types
import type { SwapFormSchema } from '@/schema/swap-form-schema'

interface SwapFormProps {}

interface TokenData {
  rate?: number
  balance?: number
}

const SwapForm: React.FC<SwapFormProps> = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [baseToken, setBaseToken] = useState<TokenData>({
    rate: 0,
    balance: 0,
  })
  const [quoteToken, setQuoteToken] = useState<TokenData>({
    rate: 0,
    balance: 0,
  })

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
    <Box
      sx={{ p: 2, backgroundColor: '#404040' }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Header */}
      <Box sx={{ pb: 2, textAlign: 'right' }}>
        <AdjustmentButton />
        <RefreshButton />
      </Box>

      <Box>
        {/* BaseToken */}
        <TokenRateAndBalance
          rate={baseToken.rate}
          balance={baseToken.balance}
        />
        <BaseTokenAmountInput control={control} />
        <TokenSelectionControls />

        {/* Divider */}
        <Divider sx={{ my: 3 }} color="white">
          <IconButton>
            <SwapVertIcon sx={{ color: 'white' }} />
          </IconButton>
        </Divider>

        {/* QuoteToken */}
        <TokenRateAndBalance
          rate={quoteToken.rate}
          balance={quoteToken.balance}
        />
        <QuoteTokenAmountInput control={control} />
        <TokenSelectionControls />
      </Box>

      <Box>
        <LoadingButton
          variant="contained"
          type="submit"
          fullWidth
          disableElevation
          loading={loading}
        >
          Swap
        </LoadingButton>
      </Box>
    </Box>
  )
}

export default SwapForm
