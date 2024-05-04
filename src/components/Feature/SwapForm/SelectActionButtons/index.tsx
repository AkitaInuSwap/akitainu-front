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
        sx={{
          mr: 1,
          backgroundColor: '#7f7f7f',
          '&:hover': { backgroundColor: '#5f5f5f' },
        }}
      >
        Half
      </Button>
      <Button
        variant="contained"
        color="info"
        size="small"
        disableElevation
        sx={{
          backgroundColor: '#7f7f7f',
          '&:hover': { backgroundColor: '#5f5f5f' },
        }}
      >
        Max
      </Button>
    </Box>
  )
}

export default SelectActionButtons
