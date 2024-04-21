// React
import { useRef, useState } from 'react'
// MUI
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Divider from '@mui/material/Divider'
import Grow from '@mui/material/Grow'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// Hooks
import useConnect from '@/hooks/useConnect'

interface WalletConnetingButtonProps {
  address: string
}

const WalletConnetingButton: React.FC<WalletConnetingButtonProps> = ({ address }) => {
  const { disconnect } = useConnect()

  const anchorRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState<boolean>(false)

  const handleToggle = () => {
    console.log('handleToggle')
    setOpen((setOpen) => !setOpen)
  }

  const handleCloseToggle = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  const handleDisconnect = () => {
    disconnect()
    setOpen(false)
  }

  return (
    <>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="Button group with a nested menu"
      >
        <Button
          variant="outlined"
          color="inherit"
          sx={{ textTransform: 'none' }}
          onClick={handleToggle}
        >
          {address.slice(0, 3)}...{address.slice(-6)}
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: 'left top',
            }}
          >
            <Paper
              sx={{
                zIndex: 1,
              }}
            >
              <ClickAwayListener onClickAway={handleCloseToggle}>
                <MenuList autoFocusItem dense>
                  <MenuItem>
                    <ListItemIcon>
                      <AccountBalanceWalletIcon />
                    </ListItemIcon>
                    <ListItemText>Wallet</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleDisconnect}>
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText>Disconnect</ListItemText>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default WalletConnetingButton
