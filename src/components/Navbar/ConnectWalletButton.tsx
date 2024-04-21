'use client'

// React
import { useState } from 'react'
// MUI
import Button from '@mui/material/Button'
// Components
import SelectWalletDialog from '@/components/Navbar/SelectWalletDialog'
// Store
import useAccount from '@/hooks/useAccount'

const ConnectWalletButton = () => {
  const { address } = useAccount()
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      {address ? (
        <Button variant="outlined" color="inherit" sx={{ textTransform: 'none' }}>
          {address.slice(0, 3)}...{address.slice(-6)}
        </Button>
      ) : (
        <Button variant="outlined" color="inherit" onClick={handleOpen}>
          Connect Wallet
        </Button>
      )}
      <SelectWalletDialog open={open} onClose={handleClose} />
    </>
  )
}

export default ConnectWalletButton
