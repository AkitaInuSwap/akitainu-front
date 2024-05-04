// MUI
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import TextField from '@mui/material/TextField'
// Types
import { Token } from '@/core/domain/entities/Token'

interface TokenSelectDialogProps {
  open: boolean
  onClose: () => void
  tokens: Token[]
  onSelectToken: (symbol: string) => void
}

const TokenSelectDialog: React.FC<TokenSelectDialogProps> = ({
  open,
  onClose,
  tokens,
  onSelectToken,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Select Token</DialogTitle>
      <DialogContent dividers>
        <Box sx={{ mt: 1 }}>
          <TextField fullWidth label="Search token" variant="outlined" />
        </Box>
        <Box>
          <List dense>
            {tokens.map((token) => {
              return (
                <ListItem
                  key={`${token.symbol}-${token.issuer}`}
                  disablePadding
                >
                  <ListItemButton onClick={() => onSelectToken(token.symbol)}>
                    <ListItemAvatar>
                      <Avatar alt={token.symbol} src={token.icon} />
                    </ListItemAvatar>
                    <ListItemText primary={token.symbol} secondary="0" />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default TokenSelectDialog
