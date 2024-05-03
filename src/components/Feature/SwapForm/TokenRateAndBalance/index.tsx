// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface TokenRateAndBalanceProps {
  rate?: number
  balance?: number
}

const TokenRateAndBalance: React.FC<TokenRateAndBalanceProps> = ({
  rate,
  balance,
}) => {
  return (
    <Box sx={{ mb: 1 }} display="flex" justifyContent="space-between">
      <Typography variant="body2">$ {rate}</Typography>
      <Typography variant="body2">Balance: {balance}</Typography>
    </Box>
  )
}

export default TokenRateAndBalance
