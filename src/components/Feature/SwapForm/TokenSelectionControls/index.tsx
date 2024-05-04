// MUI
import Box from '@mui/material/Box'
// Components
import SelectTokenButton from '@/components/Feature/SwapForm/SelectTokenButton'
import SelectActionButtons from '@/components/Feature/SwapForm/SelectActionButtons'

interface TokenSelectionControlsProps {
  onTokenSelect: () => void
}

const TokenSelectionControls: React.FC<TokenSelectionControlsProps> = ({
  onTokenSelect,
}) => {
  return (
    <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
      <SelectTokenButton onClick={onTokenSelect} />
      <SelectActionButtons />
    </Box>
  )
}

export default TokenSelectionControls
