// MUI
import Button from '@mui/material/Button'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

interface SelectTokenButtonProps {
  onClick?: () => void
}

const SelectTokenButton: React.FC<SelectTokenButtonProps> = ({ onClick }) => {
  return (
    <>
      <Button
        variant="outlined"
        color="info"
        disableElevation
        onClick={onClick}
        endIcon={<ArrowDropDownIcon />}
      >
        Select Token
      </Button>
    </>
  )
}

export default SelectTokenButton
