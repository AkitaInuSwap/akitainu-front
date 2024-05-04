'use client'

// Config
import { COINS } from '@/config/coins'
// React
import { useState } from 'react'
// Lib
import crossmark from '@crossmarkio/sdk'
import { useForm } from 'react-hook-form'
// MUI
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
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
  symbol?: string
  rate?: number
  balance?: number
}

const SwapForm: React.FC<SwapFormProps> = () => {
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
        <TokenSelectionControls onTokenSelect={() => handleOpen('base')} />

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
        <QuoteTokenAmountInput control={control} symbol={quoteToken.symbol} />
        <TokenSelectionControls onTokenSelect={() => handleOpen('quote')} />
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
      <Dialog open={open} onClose={handleClose}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Select Token</DialogTitle>
        <DialogContent dividers>
          <Box sx={{ mt: 1 }}>
            <TextField fullWidth label="Search token" variant="outlined" />
          </Box>
          <Box>
            <List dense>
              {COINS.map((coin) => {
                return (
                  <ListItem key={coin.id} disablePadding>
                    <ListItemButton onClick={() => handleSelectToken(coin.symbol)}>
                      <ListItemAvatar>
                        <Avatar alt={coin.symbol} src={coin.icon} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={coin.symbol}
                        secondary="0"
                      />
                    </ListItemButton>
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default SwapForm
