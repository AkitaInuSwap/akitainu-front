import MuiCard from '@mui/material/Card'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <MuiCard variant="outlined">{children}</MuiCard>
}

export default Card
