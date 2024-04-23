'use client'

// Config
import { APP_NAME } from '@/config/site'
// React
import { useRouter } from 'next/router'
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
  const router = useRouter()

  // 別タブで開く
  const openLink = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: '#583822',
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ mr: 4 }}>
          {APP_NAME}
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit" onClick={() => router.push('/')}>
            Home
          </Button>
          <Button color="inherit" onClick={() => router.push('/swap')}>
            Swap
          </Button>
          <Button color="inherit" onClick={() => router.push('/liquidity')}>
            Liquidity
          </Button>
          <Button
            color="inherit"
            onClick={() =>
              openLink('https://metaakitafinance.gitbook.io/akitainu-swap/')
            }
          >
            Docs
          </Button>
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
