// MUI
import IconButton from '@mui/material/IconButton'
import AutorenewIcon from '@mui/icons-material/Autorenew'

interface RefreshButtonProps {}

const RefreshButton: React.FC<RefreshButtonProps> = () => {
  return (
    <IconButton color="inherit" size="small">
      <AutorenewIcon fontSize="small" />
    </IconButton>
  )
}

export default RefreshButton
