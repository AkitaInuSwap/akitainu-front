'use client'

// Config
import { WALLET_TYPES, WALLETS } from '@/config/wallets'
// MUI
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
// Hooks
import useConnect from '@/hooks/useConnect'

type SelectWalletDialogProps = {
  open: boolean
  onClose: () => void
}

const SelectWalletDialog = ({ open, onClose }: SelectWalletDialogProps) => {
  const { connect } = useConnect()

  const handleConnect = async (type: WALLET_TYPES) => {
    try {
      await connect(type)
      onClose()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Sellect Wallets</DialogTitle>
      <DialogContent>
        {Object.values(WALLETS).map((wallet) => {
          return (
            <Button
              key={wallet.name}
              variant="contained"
              fullWidth
              disableElevation
              sx={{ mb: 1 }}
              disabled={!wallet.isActive}
              onClick={() => handleConnect(wallet.type)}
            >
              {wallet.name}
            </Button>
          )
        })}
      </DialogContent>
    </Dialog>
  )
}

export default SelectWalletDialog
