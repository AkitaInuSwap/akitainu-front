import { z } from 'zod'

export const swapFormSchema = z.object({
  baseAmount: z.string(),
  quoteAmount: z.string(),
})

export type SwapFormSchema = z.infer<typeof swapFormSchema>
