// React
import { useRouter } from 'next/router'
// MUI
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

interface BreadcrumbNavigationProps {
  navigations: {
    href: string
    name: string
  }[]
}

const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({
  navigations,
}) => {
  const router = useRouter()

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {navigations.map((navigation, index) => {
        if (index < navigations.length - 1) {
          return (
            <Link
              key={index}
              underline="hover"
              color="inherit"
              sx={{ cursor: 'pointer' }}
              onClick={() => router.push(navigation.href)}
            >
              {navigation.name}
            </Link>
          )
        } else {
          return (
            <Typography key={index} color="text.primary">
              {navigation.name}
            </Typography>
          )
        }
      })}
    </Breadcrumbs>
  )
}

export default BreadcrumbNavigation
