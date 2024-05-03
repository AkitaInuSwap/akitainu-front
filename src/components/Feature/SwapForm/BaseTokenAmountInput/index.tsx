// Lib
import { Controller } from 'react-hook-form'
// MUI
import TextField from '@mui/material/TextField'
// Types
import type { Control } from 'react-hook-form'
import type { SwapFormSchema } from '@/schema/swap-form-schema'

interface BaseTokenAmountInputProps {
  control: Control<SwapFormSchema, any>
}

const BaseTokenAmountInput: React.FC<BaseTokenAmountInputProps> = ({ control }) => {
  return (
    <Controller
      name="baseAmount"
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
          error={errors.baseAmount ? true : false}
          helperText={errors.baseAmount?.message as string}
          sx={{ mb: 2, input: { color: 'white' } }}
        />
      )}
    />
  )
}

export default BaseTokenAmountInput
