'use client'

// React
import { useState } from 'react'
// Lib
import { useForm } from 'react-hook-form'
// MUI
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import LoadingButton from '@mui/lab/LoadingButton'
import SwapVertIcon from '@mui/icons-material/SwapVert'
// Components
import AdjustmentButton from '@/components/Feature/SwapForm/AdjustmentButton'
import BaseTokenAmountInput from '@/components/Feature/SwapForm/BaseTokenAmountInput'
import QuoteTokenAmountInput from '@/components/Feature/SwapForm/QuoteTokenAmountInput'
import RefreshButton from '@/components/Feature/SwapForm/RefreshButton'
import SelectActionButtons from '@/components/Feature/SwapForm/SelectActionButtons'
import SelectTokenButton from '@/components/Feature/SwapForm/SelectTokenButton'
import TokenSelectDialog from '@/components/Feature/SwapForm/TokenSelectDialog'
import TokenRateAndBalance from '@/components/Feature/SwapForm/TokenRateAndBalance'
// Hooks
import useTokens from '@/hooks/useTokens'
// Types
import type { SwapFormSchema } from '@/schema/swap-form-schema'

interface SwapFormProps {}

interface TokenData {
  symbol?: string
  rate?: number
  balance?: number
}

const SwapForm: React.FC<SwapFormProps> = () => {
  const { tokens } = useTokens()

  const [loading, setLoading] = useState<boolean>(false)

  const [open, setOpen] = useState<boolean>(false)
  const [side, setSide] = useState<'base' | 'quote'>('base')

  const [baseToken, setBaseToken] = useState<TokenData>({
    symbol: '',
    rate: 0,
    balance: 0,
  })
  const [quoteToken, setQuoteToken] = useState<TokenData>({
    symbol: '',
    rate: 0,
    balance: 0,
  })

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = (side: 'base' | 'quote') => {
    setSide(side)
    setOpen(true)
  }

  const handleSelectToken = async (symbol: string) => {
    if (side === 'base') {
      setBaseToken({
        symbol: symbol,
        rate: 0,
        balance: 0,
      })
    } else {
      setQuoteToken({
        symbol: symbol,
        rate: 0,
        balance: 0,
      })
    }
    setOpen(false)
  }

  const handleSwitchTokens = () => {
    const temp = { ...baseToken }
    setBaseToken({ ...quoteToken })
    setQuoteToken({ ...temp })
  }

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
        <BaseTokenAmountInput control={control} symbol={baseToken.symbol} />
        <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
          <SelectTokenButton
          onClick={() => handleOpen('base')}
            label={baseToken.symbol ? baseToken.symbol : 'Select Token'}
          />
          <SelectActionButtons />
        </Box>

        {/* Divider */}
        <Divider sx={{ my: 3 }} color="white">
          <IconButton onClick={handleSwitchTokens}>
            <SwapVertIcon sx={{ color: 'white' }} />
          </IconButton>
        </Divider>

        {/* QuoteToken */}
        <TokenRateAndBalance
          rate={quoteToken.rate}
          balance={quoteToken.balance}
        />
        <QuoteTokenAmountInput control={control} symbol={quoteToken.symbol} />
        <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
          <SelectTokenButton
            onClick={() => handleOpen('quote')}
            label={quoteToken.symbol ? quoteToken.symbol : 'Select Token'}
          />
          <SelectActionButtons />
        </Box>
      </Box>

      <Box sx={{ mt: 3 }}>
        <LoadingButton
          variant="contained"
          type="submit"
          size="large"
          fullWidth
          disableElevation
          loading={loading}
        >
          Swap
        </LoadingButton>
      </Box>

      {/* TokenSelectDialog */}
      <TokenSelectDialog
        open={open}
        onClose={handleClose}
        tokens={tokens}
        onSelectToken={handleSelectToken}
      />
    </Box>
  )
}

export default SwapForm
