// MUI
import Button from '@mui/material/Button'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

interface SelectTokenButtonProps {}

const SelectTokenButton: React.FC<SelectTokenButtonProps> = () => {
  return (
    <Button
      variant="outlined"
      color="info"
      disableElevation
      endIcon={<ArrowDropDownIcon />}
    >
      Select Token
    </Button>
  )
}

export default SelectTokenButton
