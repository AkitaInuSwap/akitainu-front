// React
import { useRouter } from 'next/router'
// MUI
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

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
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={
        <NavigateNextIcon sx={{ color: '#a9a9a9' }} fontSize="small" />
      }
    >
      {navigations.map((navigation, index) => {
        if (index < navigations.length - 1) {
          return (
            <Link
              key={index}
              underline="hover"
              sx={{ color: '#a9a9a9', cursor: 'pointer' }}
              onClick={() => router.push(navigation.href)}
            >
              {navigation.name}
            </Link>
          )
        } else {
          return (
            <Typography key={index} color="white">
              {navigation.name}
            </Typography>
          )
        }
      })}
    </Breadcrumbs>
  )
}

export default BreadcrumbNavigation
