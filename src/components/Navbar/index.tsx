'use client'

// Config
import { APP_NAME } from '@/config/site'
// MUI
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
// Components
import WalletConnetingButton from '@/components/Navbar/WalletConnectingButton'
import WalletConnectButton from '@/components/Navbar/WalletConnectButton'
// Hooks
import useAccount from '@/hooks/useAccount'

const Navbar = () => {
  const { address } = useAccount()

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: '#232f3e',
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ mr: 4 }}>
          {APP_NAME}
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit">Swap</Button>
          <Button color="inherit">Liquidity</Button>
          <Button color="inherit">Faucet</Button>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          {address ? (
            <WalletConnetingButton address={address} />
          ) : (
            <WalletConnectButton />
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
