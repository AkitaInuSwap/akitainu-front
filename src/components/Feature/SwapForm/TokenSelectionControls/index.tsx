// MUI
import Box from '@mui/material/Box'
// Components
import SelectTokenButton from '@/components/Feature/SwapForm/SelectTokenButton'
import SelectActionButtons from '@/components/Feature/SwapForm/SelectActionButtons'

const TokenSelectionControls: React.FC = () => {
  return (
    <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
      <SelectTokenButton />
      <SelectActionButtons />
    </Box>
  )
}

export default TokenSelectionControls
