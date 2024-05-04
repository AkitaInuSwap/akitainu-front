// Lib
import { Controller } from 'react-hook-form'
// MUI
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
// Types
import type { Control } from 'react-hook-form'
import type { SwapFormSchema } from '@/schema/swap-form-schema'

interface QuoteTokenAmountInputProps {
  control: Control<SwapFormSchema, any>
  symbol?: string
}

const QuoteTokenAmountInput: React.FC<QuoteTokenAmountInputProps> = ({
  control,
  symbol,
}) => {
  return (
    <Controller
      name="quoteAmount"
      control={control}
      defaultValue=""
      rules={{
        required: { value: true, message: 'Amount is required' },
      }}
      render={({ field, formState: { errors } }) => (
        <TextField
          {...field}
          variant="outlined"
          placeholder="0.0"
          fullWidth
          InputProps={{
            endAdornment: <Typography sx={{ color: 'white' }}>{symbol ? symbol : ''}</Typography>,
          }}
          error={errors.quoteAmount ? true : false}
          helperText={errors.quoteAmount?.message as string}
          sx={{ mb: 2, input: { color: 'white' } }}
        />
      )}
    />
  )
}

export default QuoteTokenAmountInput
