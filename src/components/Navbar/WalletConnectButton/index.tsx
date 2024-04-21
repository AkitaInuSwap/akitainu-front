'use client'

// React
import { useState } from 'react'
// MUI
import Button from '@mui/material/Button'
// Components
import SelectWalletDialog from '@/components/Navbar/SelectWalletDialog'

const ConnectWalletButton = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button variant="outlined" color="inherit" onClick={handleOpen}>
        Connect Wallet
      </Button>
      <SelectWalletDialog open={open} onClose={handleClose} />
    </>
  )
}

export default ConnectWalletButton
