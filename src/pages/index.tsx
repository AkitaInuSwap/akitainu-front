'use client'

// Config
import { APP_NAME } from '@/config/site'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
// React
import Image from 'next/image'
import { useRouter } from 'next/router'
// MUI
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
// Components
import Layout from '@/components/Layout'
// Types
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'

const Home: NextPageWithLayout = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Image
            src="/akitainuswap.png"
            alt="Akita Inu"
            layout="responsive"
            width={800}
            height={500}
          />
        </Grid>

        <Grid xs={12} sx={{ my: 2, textAlign: 'center' }}>
          <Typography component="h4" variant="h4" sx={{ fontWeight: 'bold' }}>
            About
          </Typography>
        </Grid>

        <Grid xs={12}>
          <Typography component="p" variant="subtitle2" sx={{ color: 'grey' }}>
            Welcome to AkitaInuSwap. Here, AkitaInu is committed to operating
            our decentralized exchange with reliability and integrity. Join us
            for a seamless trading experience, where you have complete control
            over your financial transactions in a secure and trustless
            environment.
          </Typography>
        </Grid>

        <Grid xs={12} sx={{ mt: 2 }}>
          <Divider />
        </Grid>

        <Grid xs={12} sx={{ my: 2, textAlign: 'center' }}>
          <Typography component="h4" variant="h4" sx={{ fontWeight: 'bold' }}>
            Discover the Ecosystem
          </Typography>
        </Grid>

        <Grid xs={12}>
          <Typography
            component="h6"
            variant="h6"
            sx={{ mb: 1, cursor: 'pointer' }}
            onClick={() => router.push('/swap')}
          >
            Swap
          </Typography>
          <Typography component="p" variant="subtitle2" sx={{ color: 'grey' }}>
            Exchange one type of token for another quickly and securely on the
            XRPL.
          </Typography>
        </Grid>

        <Grid xs={12}>
          <Typography
            component="h6"
            variant="h6"
            sx={{ mb: 1, cursor: 'pointer' }}
            onClick={() => router.push('/liquidity')}
          >
            Liquidity
          </Typography>
          <Typography component="p" variant="subtitle2" sx={{ color: 'grey' }}>
            Add or remove liquidity for XRPL pools here. Select a token pair,
            input amounts, and confirm to earn fees.
          </Typography>
        </Grid>

        <Grid xs={12} sx={{ mt: 2 }}>
          <Divider />
        </Grid>

        <Grid xs={12} sx={{ my: 2, textAlign: 'center' }}>
          <Typography component="h4" variant="h4" sx={{ fontWeight: 'bold' }}>
            Tokenomics
          </Typography>
        </Grid>

        <Grid xs={6}>
          <Typography component="p" variant="subtitle2" sx={{ color: 'grey' }}>
            Comming soon...
          </Typography>
        </Grid>

        <Grid xs={6}>
          <Image
            src="/akitainu1.png"
            alt="Akita Inu"
            layout="responsive"
            width={250}
            height={250}
          />
        </Grid>

        <Grid xs={12} sx={{ mt: 2 }}>
          <Divider />
        </Grid>

        <Grid xs={12} sx={{ my: 2, textAlign: 'center' }}>
          <Typography component="h4" variant="h4" sx={{ fontWeight: 'bold' }}>
            Roadmap
          </Typography>
        </Grid>

        <Grid xs={6}>
          <Typography component="p" variant="subtitle2" sx={{ color: 'grey' }}>
            Comming soon...
          </Typography>
        </Grid>

        <Grid xs={6} sx={{ mb: 8 }}>
          <Image
            src="/akitainu2.png"
            alt="Akita Inu"
            layout="responsive"
            width={250}
            height={250}
          />
        </Grid>
      </Grid>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
