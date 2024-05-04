// MUI
import Button from '@mui/material/Button'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

interface SelectTokenButtonProps {
  label: string
  onClick?: () => void
}

const SelectTokenButton: React.FC<SelectTokenButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <>
      <Button
        variant="outlined"
        color="info"
        disableElevation
        onClick={onClick}
        endIcon={<ArrowDropDownIcon />}
        sx={{
          color: '#cacaca',
          borderColor: '#c0c0c0',
          '&:hover': {
            backgroundColor: 'transparent',
            borderColor: '#7f7f7f',
            color: '#cacaca',
          },
        }}
      >
        {label}
      </Button>
    </>
  )
}

export default SelectTokenButton
