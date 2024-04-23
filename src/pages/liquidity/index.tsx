'use client'

// React
import { useState } from 'react'
import { useRouter } from 'next/router'
// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Unstable_Grid2'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Typography from '@mui/material/Typography'
// Components
import Card from '@/components/Card'
import Layout from '@/components/Layout'
// Types
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'

const navigations = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/liquidity',
    name: 'Liquidity',
  },
]

const Liquidity: NextPageWithLayout = () => {
  const router = useRouter()

  const [value, setValue] = useState<string>('1')

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Card>
          <CardContent>
            <Typography
              component="h5"
              variant="h5"
              sx={{ mb: 1, fontWeight: 'bold' }}
            >
              Liquidity pools
            </Typography>
            <Typography
              component="p"
              variant="subtitle2"
              sx={{ color: 'grey' }}
            >
              Add or remove liquidity for XRPL pools here. Select a token pair,
              input amounts, and confirm to earn fees.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid xs={12}>
        <Card>
          <CardContent>
            <Box sx={{ textAlign: 'right' }}>
              <Button
                variant="contained"
                disableElevation
                sx={{ mr: 1 }}
                onClick={() => router.push('/liquidity/create')}
              >
                Create pool
              </Button>
              <Button
                variant="contained"
                disableElevation
                onClick={() => router.push('/liquidity/add')}
              >
                Add liquidity
              </Button>
            </Box>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Pools" value="1" />
                  <Tab label="My Pools" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">Item One</TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
            </TabContext>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

Liquidity.getLayout = function getLayout(page: ReactElement) {
  return <Layout navigations={navigations}>{page}</Layout>
}

export default Liquidity
