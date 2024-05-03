'use client'

import Button from '@mui/material/Button'
import TuneIcon from '@mui/icons-material/Tune'

interface AdjustmentButtonProps {}

const AdjustmentButton: React.FC<AdjustmentButtonProps> = () => {
  return (
    <Button
      variant="outlined"
      size="small"
      color="inherit"
      startIcon={<TuneIcon />}
      sx={{ mr: 1 }}
    >
      0.1 %
    </Button>
  )
}

export default AdjustmentButton
