// MUI
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const SelectActionButtons: React.FC = () => {
  return (
    <Box>
      <Button
        variant="contained"
        color="info"
        size="small"
        disableElevation
        sx={{ mr: 1 }}
      >
        Half
      </Button>
      <Button variant="contained" color="info" size="small" disableElevation>
        Max
      </Button>
    </Box>
  )
}

export default SelectActionButtons
